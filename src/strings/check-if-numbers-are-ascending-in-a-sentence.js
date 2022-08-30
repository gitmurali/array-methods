// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let num = Number.MIN_VALUE;
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      if (+arr[i] > num) {
        num = +arr[i];
      } else {
        return false;
      }
    }
  }

  return true;
};
