import { cwd } from 'node:process';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const diff = (filepath1,filepath2) => {
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const relativePath = getFixturePath(filepath1);
console.log(readFileSync(path.resolve(relativePath),'utf8'));
console.log(readFileSync(path.resolve(filepath2),'utf8'));



}
export default diff;


