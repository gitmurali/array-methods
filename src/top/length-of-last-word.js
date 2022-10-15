// https://leetcode.com/problems/length-of-last-word/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

var lengthOfLastWord = function (s) {
  return s.split(/[ ]+/).filter(Boolean).at(-1).length;
};

var lengthOfLastWord = function (s) {
  let len = 0;
  let hasStarted = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") hasStarted = true;
    if (hasStarted) {
      if (s[i] === " ") break;
      len++;
    }
  }
  return len;
};
