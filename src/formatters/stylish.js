import _ from 'lodash';

const step = 4;
const getIndent = (count) => " ".repeat(count * step);

const iter = (node, depth) => {
  if (!_.isObject) {
    return node;
  }
  const endIndent = getIndent(depth - 1);
  const lines = Object.entries(node).map(([key, value]) => `${getIndent(depth)}${key}: ${iter(value, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${endIndent}`,
  ].join('\n');
};

const stylish = (data, depth = 1) => {
  const indent = getIndent(depth);
  const endIndent = getIndent(depth - 1);
  const lines = Object.entries(data).flatMap((data) => {
switch(data.type) {
  case 'nested'{
    return `${indent} ${data.key}:${stylish(data.children,depth + 1)}`
  }
}

  });
};
