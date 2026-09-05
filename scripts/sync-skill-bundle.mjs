#!/usr/bin/env node
// Development-only vendoring. Published packages only import their own lib/.
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'

const source = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { values } = parseArgs({ options: { target: { type: 'string' }, check: { type: 'boolean', default: false } } })
const target = resolve(values.target ?? join(source, '../dsh-remotion'))
if (JSON.parse(readFileSync(join(target, 'package.json'), 'utf8')).name !== 'dsh-remotion') throw new Error('--target must be the dsh-remotion checkout')
for (const file of ['src/skill-bundle.ts', 'test/skill-bundle.test.mjs', 'test/shared-source.test.mjs']) {
  const text = readFileSync(join(source, file), 'utf8')
  if (values.check) {
    if (readFileSync(join(target, file), 'utf8').replace(/\r\n/g, '\n') !== text.replace(/\r\n/g, '\n')) throw new Error('Vendored file differs: ' + file)
  } else {
    writeFileSync(join(target, file), text)
  }
}
console.log(values.check ? 'Shared skill-bundle sources match.' : 'Updated dsh-remotion vendored skill-bundle sources. Rebuild both packages.')
