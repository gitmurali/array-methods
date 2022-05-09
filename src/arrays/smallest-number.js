// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let result = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        result[i] += 1;
      }
    }
  }

  return result;
};

// # solution 2
// const map = new Map([...nums].sort((a, b) => b - a).map((val, idx) => [val, nums.length-idx-1]))
// return nums.map(val => map.get(val))
