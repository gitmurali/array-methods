// https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
    if (map[nums[i]] >= nums.length / 2) return nums[i];
  }
};
