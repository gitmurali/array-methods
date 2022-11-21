// https://leetcode.com/problems/combination-sum/
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];

  const permutate = (arr = [], sum = 0, idx = 0) => {
    if (sum > target) return;
    if (sum === target) res.push(arr);

    for (let i = idx; i < candidates.length; i++) {
      permutate([...arr, candidates[i]], sum + candidates[i], i);
    }
  };

  permutate();

  return res;
};
