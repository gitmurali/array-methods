// https://leetcode.com/problems/shuffle-string/
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const arr = indices.reduce((acc, val, idx) => {
    acc[val] = s[idx];
    return acc;
  }, []);
  return arr.join("");
};
