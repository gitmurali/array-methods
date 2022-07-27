// https://leetcode.com/problems/di-string-match/

/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let i = 0;
  let dec = s.length;
  let inc = 0;
  let res = [];

  while (res.length !== s.length + 1) {
    res[i] = s[i] === "D" ? dec-- : inc++;
    i++;
  }

  return res;
};
