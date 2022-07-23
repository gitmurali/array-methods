// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  var freq = {};
  for (let c of s) freq[c] = (freq[c] || 0) + 1;
  var val = freq[s[0]];
  for (let c in freq) if (freq[c] && freq[c] != val) return false;
  return true;
};
