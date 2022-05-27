// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  return nums[len - 1] * nums[len - 2] - nums[0] * nums[1];
};
