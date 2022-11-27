import _ from 'lodash';

const getTree = (data1, data2) => {
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  // [ 'common', 'group1', 'group2', 'group3' ]
  console.log(keys);
  const diff = keys.map((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return {
        key,
        children: getTree(data1[key], data2[key]),
        type: 'nested',
      };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, value2: data2[key], type: 'added' };
    }
    if (!Object.hasOwn(data2, key)) {
      return { key, value1: data1[key], type: 'deleted' };
    }
    if (data1[key] !== data2[key]) {
      return {
        key,
        value1: data1[key],
        value2: data2[key],
        type: 'changed',
      };
    }
    return { key, value1: data1[key], type: 'unchanged' };
  });
  return diff;
};
export default getTree;

// [
//   {
//    "key": "common",
//    "children": [
//     {
//      "key": "follow",
//      "value2": false,
//      "type": "added"
//     },
//     {
//      "key": "setting1",
//      "value1": "Value 1",
//      "type": "unchanged"
//     },
//     {
//      "key": "setting2",
//      "value1": 200,
//      "type": "deleted"
//     },
//     {
//      "key": "setting3",
//      "value1": true,
//      "value2": null,
//      "type": "changed"
//     },
//     {
//      "key": "setting4",
//      "value2": "blah blah",
//      "type": "added"
//     },
//     {
//      "key": "setting5",
//      "value2": {
//       "key5": "value5"
//      },
//      "type": "added"
//     },
//     {
//      "key": "setting6",
//      "children": [
//       {
//        "key": "doge",
//        "children": [
//         {
//          "key": "wow",
//          "value1": "",
//          "value2": "so much",
//          "type": "changed"
//         }
//        ],
//        "type": "nested"
//       },
//       {
//        "key": "key",
//        "value1": "value",
//        "type": "unchanged"
//       },
//       {
//        "key": "ops",
//        "value2": "vops",
//        "type": "added"
//       }
//      ],
//      "type": "nested"
//     }
//    ],
//    "type": "nested"
//   },
//   {
//    "key": "group1",
//    "children": [
//     {
//      "key": "baz",
//      "value1": "bas",
//      "value2": "bars",
//      "type": "changed"
//     },
//     {
//      "key": "foo",
//      "value1": "bar",
//      "type": "unchanged"
//     },
//     {
//      "key": "nest",
//      "value1": {
//       "key": "value"
//      },
//      "value2": "str",
//      "type": "changed"
//     }
//    ],
//    "type": "nested"
//   },
//   {
//    "key": "group2",
//    "value1": {
//     "abc": 12345,
//     "deep": {
//      "id": 45
//     }
//    },
//    "type": "deleted"
//   },
//   {
//    "key": "group3",
//    "value2": {
//     "deep": {
//      "id": {
//       "number": 45
//      }
//     },
//     "fee": 100500
//    },
//    "type": "added"
//   }
//  ]
