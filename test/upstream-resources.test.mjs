import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const root = fileURLToPath(new URL('../', import.meta.url)), provenance = JSON.parse(readFileSync(join(root, 'skills/UPSTREAM.json'), 'utf8'))
test('the recorded upstream skill resources are complete and retain their verified contents', () => {
  for (const [name, expected] of Object.entries(provenance.files)) {
    const raw = readFileSync(join(root, 'skills', name)), bytes = /\.(?:md|mjs|js|ts|tsx|yaml|yml|json|html|css|py|txt|cjs|svg|csv|sh|jsx)$/.test(name) ? Buffer.from(raw.toString().replaceAll('\r\n', '\n')) : raw
    assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, name)
  }
})
test('the official plugin launcher pins its own release and cannot install standalone skills', async () => {
  const { invocation, pluginVersion } = await import('../skills/hyperframes/scripts/plugin-cli.mjs')
  assert.equal(pluginVersion(root), provenance.version)
  const call = invocation(['render', '.'], { version: provenance.version, platform: 'win32', node: 'C:\\node\\node.exe', pathExists: () => true, env: {} })
  assert.ok(call.args.includes('hyperframes@' + provenance.version))
  assert.equal(call.env.HYPERFRAMES_SKIP_SKILLS, '1'); assert.equal(call.env.HYPERFRAMES_NO_UPDATE_CHECK, '1')
  assert.throws(() => invocation(['skills', 'update'], { version: provenance.version }), /plugin manager/)
})
