//https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
  const str1 = word1.reduce((acc, cv) => acc + cv, "");
  const str2 = word2.reduce((acc, cv) => acc + cv, "");
  return str1 === str2;
};
