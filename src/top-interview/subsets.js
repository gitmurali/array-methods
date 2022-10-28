// https://leetcode.com/problems/subsets/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const res = [[]];
  for (let i = 0; i < nums.length; i++) {
    let tmp = [];
    for (const r of res) {
      tmp.push([...r, nums[i]]);
    }
    res.push(...tmp);
  }
  return res;
};
