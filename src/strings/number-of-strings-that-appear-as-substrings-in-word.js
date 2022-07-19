// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let count = 0;
  patterns.forEach((cv) => {
    if (word.includes(cv)) count++;
  });
  return count;
};
