// https://leetcode.com/problems/permutations/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  dfs(nums, [], Array(nums.length).fill(false), res);
  return res;
};

function dfs(nums, path, used, res) {
  if (path.length === nums.length) {
    res.push(Array.from(path));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, path, used, res);
    path.pop();
    used[i] = false;
  }
}
