import _ from 'lodash';

const dataCompare = (obj1, obj2) => {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);
  const keys = [].concat(keysObj1, keysObj2);
  const sortKeys = _.union(_.sortBy(keys));
  const a = sortKeys.reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (value1 === value2) {
      return `${acc}    ${key}: ${value1}\n`;
    }
    if ((_.has(obj1, key)) && (_.has(obj2, key))) {
      return `${acc}  - ${key}: ${value1}\n  + ${key}: ${value2}\n`;
    }
    if ((!_.has(obj1, key)) && (_.has(obj2, key))) {
      return `${acc}  + ${key}: ${value2}\n`;
    }
    if ((_.has(obj1, key)) && (!_.has(obj2, key))) {
      return `${acc}  - ${key}: ${value1}\n`;
    }
    return acc;
  }, '');
  return `{\n${a}}`;
};
export default dataCompare;
