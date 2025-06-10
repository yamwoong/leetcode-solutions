/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sarr = s.split("").sort();
  const tarr = t.split("").sort();

  return sarr.join() === tarr.join();
};
