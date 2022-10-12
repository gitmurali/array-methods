// https://leetcode.com/problems/largest-perimeter-triangle/
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  // perimeter of triangle z < x + y
  // z should be less than x+y
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }
  return 0;
};
