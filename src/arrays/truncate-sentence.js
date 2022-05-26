//https://leetcode.com/problems/truncate-sentence/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};

// const truncateSentence = (s, k) => s.split(' ', k).join(' ');
