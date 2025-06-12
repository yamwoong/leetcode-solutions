/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // console.log('num1', nums1.slice(0, m));
  // console.log('num2', nums2.slice(0, n));

  // console.log('...', [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b));

  const result = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort(
    (a, b) => a - b
  );

  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
};
