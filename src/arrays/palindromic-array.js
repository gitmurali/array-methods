// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (word.split("").reverse().join("") === word) {
      return word;
    }
  }
  return "";
};
