// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return [...s].sort().join("") === [...t].sort().join("");
};

/**
 * solution 2
 */
var isAnagram = function (s, t) {
  const map = {};
  for (const c of s) map[c] = (map[c] || 0) + 1;
  for (const k of t) {
    if (map[k]) map[k] -= 1;
    else return false;
  }
  return Object.values(map).every((v) => !v);
};
