/**
2114. Maximum Number of Words Found in Sentences
https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 */
/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    max = Math.max(sentences[i].split(" ").length, max);
  }
  return max;
};
