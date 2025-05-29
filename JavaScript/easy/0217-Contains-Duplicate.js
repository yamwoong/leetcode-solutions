/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const result = new Set(nums).size !== nums.length;
  return result;
};
