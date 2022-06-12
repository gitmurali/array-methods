// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/submissions/

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

// solution 2
const maxProduct1 = (
  nums,
  max = nums.reduce(
    (prev, val) => [
      Math.max(prev[1], Math.min(prev[0], val)),
      Math.max(prev[0], val)
    ],
    [0, 0]
  )
) => (max[0] - 1) * (max[1] - 1);
