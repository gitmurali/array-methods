// https://leetcode.com/problems/maximum-number-of-pairs-in-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
  const map = {};
  let pairs = 0;
  let leftOvers = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  Object.keys(map).forEach((val) => {
    if (map[val] % 2 === 0) {
      pairs += map[val] / 2;
    } else {
      pairs += Math.floor(map[val] / 2);
      leftOvers++;
    }
  });

  return [pairs, leftOvers];
};
