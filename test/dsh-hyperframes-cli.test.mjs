import test from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs'
import { homedir, tmpdir } from 'node:os'
import { dirname, join, posix, win32 } from 'node:path'
import { fileURLToPath } from 'node:url'
import { forwardExit, invocation, launcherPath, runCli } from '../scripts/dsh-hyperframes-cli.mjs'

const root = fileURLToPath(new URL('../', import.meta.url))

function installed(t, version = '0.9.77') {
  const home = mkdtempSync(join(tmpdir(), 'dsh-hyperframes-cli-'))
  t.after(() => rmSync(home, { recursive: true, force: true }))
  const pluginDirectory = join(home, 'installed', 'dsh-hyperframes'), cwd = join(home, 'project')
  mkdirSync(pluginDirectory, { recursive: true }); mkdirSync(cwd, { recursive: true })
  writeFileSync(join(pluginDirectory, 'plugin.json'), JSON.stringify({ name: 'hyperframes', version }))
  writeFileSync(join(pluginDirectory, 'package.json'), JSON.stringify({ name: 'dsh-hyperframes', type: 'module' }))
  return { home, pluginDirectory, cwd }
}

function npmFiles(platform, files, links = {}, directories = []) {
  const paths = platform === 'win32' ? win32 : posix
  const key = value => platform === 'win32' ? paths.normalize(value).toLowerCase() : paths.normalize(value)
  const known = new Set(files.map(key)), folders = new Set(directories.map(key)), symlinks = new Map(Object.entries(links).map(([a, b]) => [key(a), b]))
  return {
    realpathSync(file) {
      const actual = symlinks.get(key(file)) ?? file
      if (known.has(key(actual)) || folders.has(key(actual))) return actual
      throw new Error('fixture path is unavailable')
    },
    statSync(file) {
      if (!known.has(key(file)) && !folders.has(key(file))) throw new Error('fixture path is unavailable')
      return { isFile: () => known.has(key(file)) }
    },
  }
}

test('Windows Electron uses PATH npm JavaScript and preserves the upstream home/project split', t => {
  const fixture = installed(t), npm = 'C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js'
  const npx = win32.join(win32.dirname(npm), 'npx-cli.js'), node = 'C:\\Apps\\DSH NEXT.exe'
  const env = { Path: '"C:\\Program Files\\nodejs";C:\\Windows', NPM_EXECPATH: 'C:\\old\\npm.cmd', npm_node_execpath: 'C:\\old\\node.exe', electron_run_as_node: '0', HYPERFRAMES_PLUGIN_CWD: 'untrusted-project' }
  const before = { ...env }, args = ['render', 'scene with spaces', '--output', 'a&b.mp4']
  const spec = invocation(args, { ...fixture, env, platform: 'win32', node, npmCwd: 'C:\\Users\\Fixture', fileSystem: npmFiles('win32', [npm, npx]) })
  assert.equal(spec.command, node)
  assert.deepEqual(spec.args, [npx, '--yes', 'hyperframes@0.9.77', ...args])
  assert.equal(spec.cwd, 'C:\\Users\\Fixture')
  assert.equal(spec.env.HYPERFRAMES_PLUGIN_CWD, fixture.cwd)
  assert.equal(spec.env.npm_execpath, npm)
  assert.equal(spec.env.npm_node_execpath, node)
  assert.equal(spec.env.ELECTRON_RUN_AS_NODE, '1')
  assert.equal(spec.env.NPM_EXECPATH, undefined)
  assert.equal(spec.env.electron_run_as_node, undefined)
  assert.equal(spec.env.NoDefaultCurrentDirectoryInExePath, '1')
  for (const name of ['HYPERFRAMES_SKIP_SKILLS', 'HYPERFRAMES_NO_UPDATE_CHECK']) assert.equal(spec.env[name], '1')
  assert.equal(spec.env.HYPERFRAMES_PLUGIN_VERSION, '0.9.77')
  assert.equal(spec.env.HYPERFRAMES_SKILL_PKG_VERSION, '0.9.77')
  assert.deepEqual(env, before)
})

for (const prefix of ['/opt/homebrew', '/usr/local']) test('Homebrew npx is run as JavaScript without a shell at ' + prefix, t => {
  const fixture = installed(t), npm = prefix + '/lib/node_modules/npm/bin/npm-cli.js', npx = prefix + '/lib/node_modules/npm/bin/npx-cli.js'
  const node = '/Applications/DSH NEXT.app/Contents/MacOS/DSH NEXT'
  const spec = invocation(['doctor'], { ...fixture, platform: 'darwin', node, npmCwd: '/Users/fixture', env: { PATH: prefix + '/bin:/usr/bin' }, fileSystem: npmFiles('darwin', [npm, npx]) })
  assert.equal(spec.command, node)
  assert.deepEqual(spec.args, [npx, '--yes', 'hyperframes@0.9.77', 'doctor'])
  assert.equal(spec.cwd, '/Users/fixture')
  assert.equal(spec.env.HYPERFRAMES_PLUGIN_CWD, fixture.cwd)
  assert.equal(spec.env.npm_node_execpath, node)
})

test('npm defaults to the actual home folder rather than the project cwd', t => {
  const fixture = installed(t), npm = '/opt/node/lib/node_modules/npm/bin/npm-cli.js', npx = posix.join(posix.dirname(npm), 'npx-cli.js')
  const spec = invocation(['doctor'], { ...fixture, platform: 'linux', node: '/opt/node/bin/node', env: { PATH: '/opt/node/bin' }, fileSystem: npmFiles('linux', [npm, npx]) })
  assert.equal(spec.cwd, homedir())
  assert.notEqual(spec.cwd, fixture.cwd)
  assert.equal(spec.env.HYPERFRAMES_PLUGIN_CWD, fixture.cwd)
})

test('--script preserves helper args and project cwd while routing CLI re-entry through this wrapper', t => {
  const fixture = installed(t), npm = '/opt/node/lib/node_modules/npm/bin/npm-cli.js', npx = posix.join(posix.dirname(npm), 'npx-cli.js')
  const spec = invocation(['--script', 'helper with spaces.mjs', '; literal'], { ...fixture, platform: 'linux', node: '/opt/node/bin/node', env: { PATH: '/opt/node/bin', HYPERFRAMES_CLI_ENTRY: '/untrusted/project/cli.mjs' }, npmCwd: '/home/fixture', fileSystem: npmFiles('linux', [npm, npx]) })
  assert.equal(spec.command, '/opt/node/bin/node')
  assert.deepEqual(spec.args, ['helper with spaces.mjs', '; literal'])
  assert.equal(spec.cwd, fixture.cwd)
  assert.equal(spec.env.HYPERFRAMES_CLI_ENTRY, launcherPath)
  assert.equal(spec.env.ELECTRON_RUN_AS_NODE, '1')
})

test('upstream managed-skill, pinned-version and minimum-version protections stay active', t => {
  const fixture = installed(t), npm = '/usr/lib/node_modules/npm/bin/npm-cli.js', npx = posix.join(posix.dirname(npm), 'npx-cli.js')
  const options = { ...fixture, platform: 'linux', node: '/usr/bin/node', env: { PATH: '/usr/bin', HYPERFRAMES_STANDALONE_CLI_VERSION: '0.0.1' }, npmCwd: '/home/fixture', fileSystem: npmFiles('linux', [npm, npx]) }
  assert.throws(() => invocation(['skills', 'update'], options), /release-managed/)
  assert.throws(() => invocation(['--cli-version', 'latest', 'doctor'], options), /plugin manager selects/)
  assert.ok(invocation(['doctor'], options).args.includes('hyperframes@0.9.77'))
  writeFileSync(join(fixture.pluginDirectory, 'plugin.json'), JSON.stringify({ name: 'hyperframes', version: '0.9.67' }))
  assert.throws(() => invocation(['doctor'], options), /0\.9\.68 or newer/)
})

test('project-local bundles and the installation cwd do not fall back to latest', t => {
  const fixture = installed(t)
  assert.throws(() => invocation(['doctor'], { ...fixture, cwd: fixture.pluginDirectory }), /not from the plugin installation or a project-local bundle/)
  assert.throws(() => invocation(['doctor'], { ...fixture, cwd: fixture.home }), /not from the plugin installation or a project-local bundle/)
})

test('npx must resolve to an absolute regular JavaScript file beside the selected npm', t => {
  const fixture = installed(t), npm = '/opt/node/lib/node_modules/npm/bin/npm-cli.js', npx = posix.join(posix.dirname(npm), 'npx-cli.js')
  const options = { ...fixture, platform: 'linux', node: '/opt/node/bin/node', env: { PATH: '/opt/node/bin' }, npmCwd: '/home/fixture' }
  assert.throws(() => invocation(['doctor'], { ...options, fileSystem: npmFiles('linux', [npm], {}, [npx]) }), /regular npx-cli\.js/)
  assert.throws(() => invocation(['doctor'], { ...options, fileSystem: npmFiles('linux', [npm, '/opt/node/bin/npx']) }), /regular npx-cli\.js/)
})

test('spawning never enables a shell and child exit codes/signals are forwarded', t => {
  const fixture = installed(t), npm = '/opt/node/lib/node_modules/npm/bin/npm-cli.js', npx = posix.join(posix.dirname(npm), 'npx-cli.js')
  const calls = [], args = ['render', '$(not-a-command); project']
  const result = runCli(args, { ...fixture, platform: 'linux', node: '/opt/node/bin/node', env: { PATH: '/opt/node/bin' }, npmCwd: '/home/fixture', fileSystem: npmFiles('linux', [npm, npx]), spawn(command, argv, options) { calls.push({ command, argv, options }); return { status: 7, signal: null } } })
  assert.equal(calls.length, 1)
  assert.equal(calls[0].command, '/opt/node/bin/node')
  assert.equal(calls[0].options.shell, false)
  assert.equal(calls[0].options.stdio, 'inherit')
  assert.equal(calls[0].argv.at(-1), args.at(-1))
  const runtime = { pid: 42, exitCode: undefined, kill(pid, signal) { calls.push({ pid, signal }) } }
  forwardExit(result, runtime)
  assert.equal(runtime.exitCode, 7)
  forwardExit({ status: null, signal: 'SIGTERM' }, runtime)
  assert.equal(runtime.exitCode, 143)
  assert.deepEqual(calls.at(-1), { pid: 42, signal: 'SIGTERM' })
  const unsupported = { pid: 42, exitCode: 0, kill() { throw new Error('unsupported') } }
  forwardExit({ status: null, signal: 'SIGTERM' }, unsupported)
  assert.equal(unsupported.exitCode, 143)
})

test('an installed copy resolves its own manifest independently of the project and forwards real helper exits', t => {
  const fixture = installed(t)
  for (const file of ['scripts/dsh-hyperframes-cli.mjs', 'lib/npm-cli.js', 'skills/hyperframes/scripts/plugin-cli.mjs', 'skills/hyperframes/scripts/lib/main-module.mjs', 'skills/hyperframes/scripts/lib/windows-exe-search.mjs']) {
    const target = join(fixture.pluginDirectory, file)
    mkdirSync(dirname(target), { recursive: true }); copyFileSync(join(root, file), target)
  }
  writeFileSync(join(fixture.cwd, 'plugin.json'), JSON.stringify({ name: 'hyperframes', version: '0.0.1' }))
  const helper = join(fixture.cwd, 'helper.mjs'), output = join(fixture.cwd, 'observed.json')
  writeFileSync(helper, `import {writeFileSync} from 'node:fs'; writeFileSync(process.argv[2], JSON.stringify({cwd:process.cwd(),version:process.env.HYPERFRAMES_PLUGIN_VERSION,entry:process.env.HYPERFRAMES_CLI_ENTRY,electron:process.env.ELECTRON_RUN_AS_NODE,args:process.argv.slice(3)})); process.exit(17)\n`)
  const launcher = join(fixture.pluginDirectory, 'scripts/dsh-hyperframes-cli.mjs')
  const result = spawnSync(process.execPath, [launcher, '--script', helper, output, 'literal ; $(arg)'], { cwd: fixture.cwd, env: { ...process.env, ELECTRON_RUN_AS_NODE: '1' }, encoding: 'utf8', shell: false, windowsHide: true })
  assert.equal(result.status, 17, result.stderr)
  assert.deepEqual(JSON.parse(readFileSync(output, 'utf8')), {
    cwd: realpathSync(fixture.cwd),
    version: '0.9.77',
    entry: realpathSync(launcher),
    electron: '1',
    args: ['literal ; $(arg)'],
  })
})
