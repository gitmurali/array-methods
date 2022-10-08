// https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right];
      if (Math.abs(threeSum - target) < Math.abs(closest - target))
        closest = threeSum;
      if (threeSum > target) right--;
      else left++;
    }
  }

  return closest;
};
