//https://leetcode.com/problems/create-target-array-in-the-given-order/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

// nums = [0,1,2,3,4], index = [0,1,2,2,1] => [ 0, 2, 4, 3, 1 ]
var createTargetArray = function (nums, idxArr) {
  return nums.reduce((acc, val, idx) => {
    acc.splice(idxArr[idx], 0, nums[idx]);
    return acc;
  }, []);
};

//# solution2
// var createTargetArray = function(nums, index) {
//   return index.reduce((result, index, i) => {
//       const leftSide = result.slice(0, index);
//       const rightSide = result.slice(index);
//       return [...leftSide, nums[i], ...rightSide];
//   }, []);
// };
