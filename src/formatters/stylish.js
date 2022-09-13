import _ from 'lodash';

const step = 4;
const replace = (count) => " ".repeat(count * step);

const iter = (node,depth) => {
  if (!_.isObject) {
    return node;
  }
  const endIndent = replace(depth - 1);
  const lines = Object.entries(node).map(([key, value]) => `${replace(depth)}${key}: ${iter(value, depth + 1)}`);

  return [
    '{',
    ...lines,
    `${endIndent}`,
  ].join('\n');
};

