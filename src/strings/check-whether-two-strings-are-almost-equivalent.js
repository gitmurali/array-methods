// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  const map = {};
  for (let i = 0; i < word1.length; i++) {
    map[word1[i]] = (map[word1[i]] ?? 0) + 1;
    map[word2[i]] = (map[word2[i]] ?? 0) - 1;
  }
  console.log(map);
  for (const a of Object.values(map)) {
    if (Math.abs(a) > 3) return false;
  }
  return true;
};
