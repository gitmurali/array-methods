// https://leetcode.com/problems/uncommon-words-from-two-sentences/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const arr = [...s1.split(" "), ...s2.split(" ")];
  const map = {};
  const result = [];

  arr.forEach((cv) => {
    map[cv] = (map[cv] ?? 0) + 1;
  });

  for (const [key, val] of Object.entries(map)) {
    if (val === 1) {
      result.push(key);
    }
  }

  return result;
};
