// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  for (let i = 1, used = false, prev = nums[0]; i < nums.length; i++) {
    if (nums[i] > prev) {
      prev = nums[i];
      continue;
    }
    if (used) return false;
    used = true;
    (i === 1 || nums[i] > nums[i - 2]) && (prev = nums[i]);
  }
  return true;
};
