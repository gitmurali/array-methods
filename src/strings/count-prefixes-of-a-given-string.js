// https://leetcode.com/problems/count-prefixes-of-a-given-string/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  return words.filter((word) => {
    return s.indexOf(word) === 0;
  }).length;
};
