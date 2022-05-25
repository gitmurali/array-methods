// https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function (nums) {
  const map = {};
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }

  Object.keys(map).forEach((key) => {
    if (map[key] === 1 && !map[+key + 1] && !map[+key - 1]) {
      res.push(key);
    }
  });

  return res;
};
