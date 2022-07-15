//https://leetcode.com/problems/find-target-indices-after-sorting-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  return nums
    .sort((a, b) => a - b)
    .reduce((res, cv, i) => {
      if (cv === target) res = [...res, i];
      return res;
    }, []);
};
