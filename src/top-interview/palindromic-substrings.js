// https://leetcode.com/problems/palindromic-substrings/
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    helper(s, i, i);
    helper(s, i, i + 1);
  }

  return count;

  function helper(s, low, high) {
    while (low >= 0 && high <= s.length && s[low] === s[high]) {
      count += 1;
      low -= 1;
      high += 1;
    }
  }
};
