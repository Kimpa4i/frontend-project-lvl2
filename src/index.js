// import { path } from 'node:path';
import { cwd } from 'node:process';
import path from 'node:path';
import { readFileSync } from 'node:fs';


// const a = path.resolve('/foo/bar', '/tmp/file/');
// console.log(a);

// console.log(`Current directory: ${cwd()}`);

const diff = (filepath1,filepath2) => {
const absolutePath = path.resolve(filepath1);

console.log(readFileSync(absolutePath,'utf8'));
// console.log(absolutePath);
}
export default diff;
// const read = readFileSync('/Users/andrew/Desktop/frontend-project-lvl2/__fixtures__/file1.json','utf8');
// const read2 = readFileSync('__fixtures__/file1.json','utf8');

// // // console.log(read);
// console.log(read2);

// const filePuth = 'file1.json';
// const absolutePath = path.resolve(filePuth);
// console.log(readFileSync(absolutePath,'utf8'));
// console.log(readFileSync(newPath));
// __fixtures__/file1.json
