/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  const short = strs.reduce((a, b) => (a.length <= b.length ? a : b));
  let result = "";

  for (let i = 0; i < short.length; i++) {
    const char = short[i];
    if (strs.every((str) => str[i] === char)) {
      result += char;
    } else {
      break;
    }
  }

  return result;
};
