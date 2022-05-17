// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      const prev = map.get(nums[i]);
      map.set(nums[i], prev + 1);
    } else {
      map.set(nums[i], 1);
    }
  }

  for (let j = 0; j < nums.length; j++) {
    const diff = nums[j] - k;
    if (map.get(diff)) {
      count += map.get(diff);
    }
  }

  return count;
};
