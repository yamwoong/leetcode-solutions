/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // console.log('s1', s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase());
  // console.log('s2', s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('').reverse().join(''));

  const s1 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const s2 = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (s1 !== s2) {
    return false;
  } else {
    return true;
  }
};
