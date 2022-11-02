// https://leetcode.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];

  const backtrack = (l, r, s) => {
    if (s.length === 2 * n) {
      res.push(s);
      return;
    }

    if (l < n) backtrack(l + 1, r, s + "(");
    if (r < l) backtrack(l, r + 1, s + ")");
  };

  backtrack(0, 0, "");

  return res;
};
