// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  let bIdx = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "b") bIdx = i;
    if (s[i] === "a" && bIdx >= 0 && i > bIdx) return false;
  }
  return true;
};

// simple solution
var checkString = function (s) {
  return s.indexOf("ba") === -1;
};
