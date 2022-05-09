// https://leetcode.com/problems/decompress-run-length-encoded-list/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  return [...nums].reduce((acc, value, i) => {
    if (i % 2 === 0) {
      acc = [...acc, ...Array(nums[i]).fill(nums[i + 1])];
    }
    return acc;
  }, []);
};
