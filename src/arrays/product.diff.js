// https://leetcode.com/problems/maximum-product-difference-between-two-pairs/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  // const len = nums.length;
  // nums.sort((a, b) => a - b)
  // return (nums[len-1] * nums[len-2]) - (nums[0] * nums[1])

  let min = 1e4,
    prevMin = min;
  let max = 0,
    prevMax = 0;

  for (const n of nums) {
    if (n > max) {
      prevMax = max;
      max = n;
    } else if (n > prevMax) {
      prevMax = n;
    }

    if (n < min) {
      prevMin = min;
      min = n;
    } else if (n < prevMin) {
      prevMin = n;
    }
  }

  return max * prevMax - min * prevMin;
};
