import fs from 'fs'
import path from 'path'
import assert from 'node:assert/strict'
import test from 'node:test'
import { remark } from 'remark'
import { compareMessage } from 'vfile-sort'
import remarkLintCodeBlockSplitList from '../index.js'

const invalidMdPath = path.join(import.meta.dirname, 'docs', 'invalid.md')
const validMdPath = path.join(import.meta.dirname, 'docs', 'valid.md')

const invalidMd = fs.readFileSync(invalidMdPath, 'utf-8')
const validMd = fs.readFileSync(validMdPath, 'utf-8')

test('code block split list', async () => {
  const result = await remark()
    .use(remarkLintCodeBlockSplitList)
    .process(invalidMd)

  result.messages.sort(compareMessage)

  assert.deepEqual(
    result.messages.map(d => d.reason),
    [
      'Add 3 spaces to the beginning of the code block to align with the list',
      'Add 1 space to the beginning of the code block to align with the list'
    ]
  )
})

test('no errors found', async () => {
  const result = await remark()
    .use(remarkLintCodeBlockSplitList)
    .process(validMd)

  assert.strictEqual(result.messages.length, 0)
})
