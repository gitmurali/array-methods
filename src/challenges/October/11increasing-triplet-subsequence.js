// https://leetcode.com/problems/increasing-triplet-subsequence/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Infinity;
  let second = Infinity;
  for (const current of nums) {
    if (current > second && second > first) return true;
    if (current > first) {
      second = current;
    } else {
      first = current;
    }
  }

  return false;
};
