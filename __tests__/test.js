import { fileURLToPath } from 'url';
import { dirname, path } from 'path';
import fs from 'fs';
import diff from '../src';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
// const readFile = (filename) => fs.readFile(getFixturePath(filename), 'utf-8');

const expectedValue = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout :20\n  + verbose: true\n}';
const test = ('test 1', () => {
  expect(diff(getFixturePath(file1.json),getFixturePath(file2.json)).toEqual(expectedValue));
});
