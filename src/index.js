import { cwd } from 'node:process';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';

const diff = (filepath1,filepath2) => {
const file1 = (readFileSync(path.resolve(filepath1),'utf8'));
// const file1 = (readFileSync(path.resolve((process.cwd(),filepath1).trim()),'utf8'));
const file2 = (readFileSync(path.resolve(process.cwd(),filepath2),'utf8'));
const fileJson1 = JSON.parse(file1);
const fileJson2 = JSON.parse(file2);
const arrFileJson1 = Object.keys(fileJson1);
const arrFileJson2 = Object.keys(fileJson2);
const newArray = [].concat(arrFileJson1, arrFileJson2);

const sortArray = _.union(_.sortBy(newArray));
// const a = sortArray.map(obj => {
//     const firstObj = fileJson1[obj];
//     const secondObj = fileJson2[obj];
//     if(firstObj === secondObj) {
//         return `${obj}:${firstObj}`
//     }
//     if((_.has(fileJson1,obj)) && (_.has(fileJson2,obj))){
//         return `+ ${obj}:${firstObj}, - ${obj}:${secondObj}`
//     }
//     if((!_.has(fileJson1,obj)) && (_.has(fileJson2,obj))){
//     return `+ ${obj}:${secondObj}`
//     }
//     if((_.has(fileJson1,obj)) && (!_.has(fileJson2,obj))){
//         return `- ${obj}:${firstObj}`
//         }
//   });

const a = sortArray.reduce((acc,obj) => {
        const firstObj = fileJson1[obj];
        const secondObj = fileJson2[obj];
        if(firstObj === secondObj) {
            return acc+`    ${obj}: ${firstObj}\n`
        }
        if((_.has(fileJson1,obj)) && (_.has(fileJson2,obj))){
            return acc + `  - ${obj}: ${firstObj}\n  + ${obj}:${secondObj}\n`
        }
        if((!_.has(fileJson1,obj)) && (_.has(fileJson2,obj))){
        return acc + `  + ${obj}: ${secondObj}\n`
        }
        if((_.has(fileJson1,obj)) && (!_.has(fileJson2,obj))){
            return acc +`  - ${obj}: ${firstObj}\n`
            }
            return acc;
      },'');
      console.log(a);
      return `{\n${a}}`
    };
export default diff;


  