//https://leetcode.com/problems/set-mismatch/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  const sum1 = (n * (n + 1)) / 2; // total sum of series like 1+2+3+4..n
  const sum2 = [...new Set(nums)].reduce((res, cv) => res + cv); // total sum of unique numbers like [1,2,4]
  // get missing number by (total sum - unique numbers);
  const sum3 = nums.reduce((res, cv) => res + cv);
  //get duplicate number by sum3 - sum2
  return [sum3 - sum2, sum1 - sum2];
};
