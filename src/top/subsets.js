// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let tmp = [];
  return nums.reduce(
    (res, cv) => {
      tmp = [];
      for (const entry of res) {
        tmp.push([...entry, cv]);
      }
      res.push(...tmp);
      return res;
    },
    [[]]
  );
};
