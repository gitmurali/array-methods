//https://leetcode.com/problems/sum-of-all-odd-length-subarrays/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let sum = 0;
  for (let i = 1; i <= arr.length; i += 2) {
    for (let j = 0; j <= arr.length - i; j++) {
      let oddArr = arr.slice(j, j + i);
      sum += oddArr.reduce((acc, cv) => acc + cv, 0);
    }
  }

  return sum;
};
