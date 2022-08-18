import process from 'node:process';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import dataCompare from './dataCompare.js';
import parser from './parsers.js';

const getPath = (file) => path.resolve(process.cwd(), '__fixtures__/', file);
const readFile = (file) => readFileSync(getPath(file), 'utf8');
const getFormat = (file) => (path.extname(file)).slice(1);

const diff = (filepath1, filepath2) => {
  const firstFile = readFile(filepath1);
  const secondFile = readFile(filepath2);
  const obj1 = parser(firstFile, getFormat(filepath1));
  const obj2 = parser(secondFile, getFormat(filepath2));
  const result = dataCompare(obj1, obj2);
  return result;
};
export default diff;

// const diff = (filepath1, filepath2) => {
//   const file1 = readFile(filepath1);
//   const file2 = readFile(filepath2);

//   const fileJson1 = JSON.parse(file1);
//   const fileJson2 = JSON.parse(file2);
//   const arrFileJson1 = Object.keys(fileJson1);
//   const arrFileJson2 = Object.keys(fileJson2);
//   const newArray = [].concat(arrFileJson1, arrFileJson2);

//   const sortArray = _.union(_.sortBy(newArray));
//   const a = sortArray.reduce((acc, obj) => {
//     const firstObj = fileJson1[obj];
//     const secondObj = fileJson2[obj];
//     if (firstObj === secondObj) {
//       return `${acc}    ${obj}: ${firstObj}\n`;
//     }
//     if ((_.has(fileJson1, obj)) && (_.has(fileJson2, obj))) {
//       return `${acc}  - ${obj}: ${firstObj}\n  + ${obj}: ${secondObj}\n`;
//     }
//     if ((!_.has(fileJson1, obj)) && (_.has(fileJson2, obj))) {
//       return `${acc}  + ${obj}: ${secondObj}\n`;
//     }
//     if ((_.has(fileJson1, obj)) && (!_.has(fileJson2, obj))) {
//       return `${acc}  - ${obj}: ${firstObj}\n`;
//     }
//     return acc;
//   }, '');
//   return `{\n${a}}`;
// };
// export default diff;
