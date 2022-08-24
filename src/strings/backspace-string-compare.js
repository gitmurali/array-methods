// https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  return bs(s) === bs(t);
};

function bs(str) {
  const res = [];
  for (let c of str) {
    if (c === "#") {
      res.pop();
    } else {
      res.push(c);
    }
  }
  return res.join("");
}
