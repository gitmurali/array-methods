// https://leetcode.com/problems/single-number/
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = {};
  for (let i of nums) {
    if (map[i]) {
      map[i] = map[i] - 1;
    } else {
      map[i] = (map[i] || 0) + 1;
    }
  }

  for (const [key] of Object.entries(map)) {
    if (map[key] === 1) return key;
  }
};
