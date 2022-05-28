//https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  const map = {};
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[num]) {
      const arr = map[num];

      for (const index of arr) {
        if ((index * i) % k === 0) ++count;
      }

      arr.push(i);
      map[num] = arr;
    } else {
      map[num] = [i];
    }
  }

  return count;
};
