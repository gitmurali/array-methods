// https://leetcode.com/problems/check-if-the-sentence-is-pangram/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  for (let chr of alpha) {
    if (!sentence.includes(chr)) return false;
  }

  return true;
};

//sol 2
var checkIfPangram = function (sentence) {
  return new Set(sentence).size === 26;
};
