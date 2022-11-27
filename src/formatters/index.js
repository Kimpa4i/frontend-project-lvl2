import stylish from "./stylish.js";

const formatter = (data, format) => {
  switch (format) {
    case "stylish":
      return stylish(data);
    default:
      throw new Error(`format ${formatter} is not supported`);
  }
};
export default formatter;
