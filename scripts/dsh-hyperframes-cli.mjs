#!/usr/bin/env node
// DSH supplies its Node/Electron runtime; keep the release-managed upstream
// launcher's project protections and avoid executing npm/npx shell wrappers.
import { spawnSync } from 'node:child_process'
import { realpathSync, statSync } from 'node:fs'
import { constants } from 'node:os'
import { posix, win32 } from 'node:path'
import { fileURLToPath } from 'node:url'
import { resolveNpmCli } from '../lib/npm-cli.js'
import { invocation as upstreamInvocation, pluginVersion } from '../skills/hyperframes/scripts/plugin-cli.mjs'
import { isMainModule } from '../skills/hyperframes/scripts/lib/main-module.mjs'

export const pluginRoot = fileURLToPath(new URL('../', import.meta.url))
export const launcherPath = fileURLToPath(import.meta.url)

export function invocation(args, options = {}) {
  const {
    cwd = process.cwd(),
    env = process.env,
    platform = process.platform,
    node = process.execPath,
    fileSystem = { realpathSync, statSync },
    npmCwd,
    pluginDirectory = pluginRoot,
  } = options
  const paths = platform === 'win32' ? win32 : posix
  if (!paths.isAbsolute(node)) throw new Error('Use an absolute Node/Electron executable path.')

  // The upstream helper validates the installed manifest and its CLI floor. A
  // project-local bundle must not silently turn into an unpinned latest CLI.
  const version = pluginVersion(pluginDirectory, cwd)
  if (!version) throw new Error('Run the installed DSH HyperFrames launcher from your project, not from the plugin installation or a project-local bundle.')

  const npm = resolveNpmCli({ execPath: node, env, platform, fileSystem })
  const npxCandidate = paths.join(paths.dirname(npm), 'npx-cli.js')
  let npx
  try {
    npx = fileSystem.realpathSync(npxCandidate)
    if (!paths.isAbsolute(npx) || paths.basename(npx).toLowerCase() !== 'npx-cli.js' || !fileSystem.statSync(npx).isFile()) npx = undefined
  } catch { /* report the same actionable error without exposing PATH details */ }
  if (!npx) throw new Error('Cannot find a regular npx-cli.js beside npm-cli.js. Install Node.js with npm and restart DSH.')

  const childEnv = { ...env }
  // Windows environment names are case-insensitive. Remove conflicting aliases
  // before setting the runtime selected by DSH rather than an inherited npm.
  const replaced = new Set(['npm_execpath', 'npm_node_execpath', 'electron_run_as_node'])
  for (const name of Object.keys(childEnv)) if (replaced.has(name.toLowerCase())) delete childEnv[name]
  Object.assign(childEnv, { npm_execpath: npm, npm_node_execpath: node, ELECTRON_RUN_AS_NODE: '1' })
  if (platform === 'win32') childEnv.NoDefaultCurrentDirectoryInExePath ??= '1'

  const spec = upstreamInvocation(args, {
    cwd, version, env: childEnv, platform, node, npmCwd,
    pathExists: file => {
      try { return paths.isAbsolute(file) && fileSystem.statSync(file).isFile() } catch { return false }
    },
    launcher: launcherPath,
  })
  if (args[0] === '--script') return spec
  // Upstream uses the npx command on POSIX. Invoke the same validated JavaScript
  // through the DSH runtime, preserving its exact args, home cwd and environment.
  if (spec.command === 'npx') return { ...spec, command: node, args: [npx, ...spec.args] }
  if (spec.command !== node) throw new Error('Unexpected upstream HyperFrames launcher command.')
  return { ...spec, args: [npx, ...spec.args.slice(1)] }
}

export function runCli(args, options = {}) {
  const { spawn = spawnSync, ...invocationOptions } = options
  const spec = invocation(args, invocationOptions)
  const result = spawn(spec.command, spec.args, {
    cwd: spec.cwd, env: spec.env, stdio: 'inherit', windowsHide: true, shell: false,
  })
  if (result.error) throw result.error
  return result
}

export function forwardExit(result, runtime = process) {
  if (result.signal) {
    runtime.exitCode = 128 + (constants.signals[result.signal] ?? 1)
    try { runtime.kill(runtime.pid, result.signal) } catch { /* retain the signal exit code where self-signalling is unsupported */ }
  } else runtime.exitCode = result.status ?? 1
}

if (isMainModule(import.meta.url)) {
  try { forwardExit(runCli(process.argv.slice(2))) }
  catch (error) { console.error(error.message); process.exitCode = 1 }
}
