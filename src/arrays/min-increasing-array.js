//https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  if (nums.length < 2) return 0;
  let count = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] <= nums[i - 1]) {
      let change = nums[i - 1] - nums[i] + 1;
      count += change;
      nums[i] += change;
    }
  }

  return count;
};

// solution 2
var minOperations = function (nums) {
  var max = 0;
  return nums.reduce((acc, cur) => {
    max = Math.max(cur, ++max);
    return acc + max - cur;
  }, 0);
};
