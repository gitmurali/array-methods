// https://leetcode.com/problems/word-break/description/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const words = new Set(wordDict);
  const wordLens = new Set(wordDict.map((word) => word.length));
  const starts = new Set([0]);
  for (let start of starts) {
    for (let len of wordLens) {
      if (words.has(s.slice(start, start + len))) {
        starts.add(start + len);
      }
    }
  }
  return starts.has(s.length);
};
