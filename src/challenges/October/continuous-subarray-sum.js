// https://leetcode.com/problems/continuous-subarray-sum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  let sum = 0;
  let prefix = 0;
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k != 0) sum %= k;

    if (set.has(sum)) return true;

    set.add(prefix);
    prefix = sum;
  }

  return false;
};
