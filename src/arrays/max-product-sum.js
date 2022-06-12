/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max1 = 0;
  let max2 = 0;

  for (const num of nums) {
    max2 = Math.max(max2, Math.min(max1, num));
    max1 = Math.max(max1, num);
  }

  return (max1 - 1) * (max2 - 1);
};
