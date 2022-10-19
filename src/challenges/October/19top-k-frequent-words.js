// https://leetcode.com/problems/top-k-frequent-words/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {};

  for (word of words) {
    map[word] = (map[word] || 0) + 1;
  }

  const res = Object.keys(map).sort((a, b) => {
    let cntCompare = map[b] - map[a];
    if (cntCompare === 0) return a.localeCompare(b);
    else return cntCompare;
  });

  return res.slice(0, k);
};
