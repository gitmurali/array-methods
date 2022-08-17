// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  return [...s].reduce((res, cv, i) => {
    const copy = s.slice(i, i + 3);
    if (copy.length === 3) {
      if (new Set([...copy]).size === 3) {
        res += 1;
      }
    }
    return res;
  }, 0);
};
