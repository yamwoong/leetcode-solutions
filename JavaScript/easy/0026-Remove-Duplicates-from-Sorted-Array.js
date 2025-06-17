/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let insertPos = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[insertPos - 1]) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }
  return insertPos;
};
