// https://leetcode.com/problems/check-if-the-sentence-is-pangram/
/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};
