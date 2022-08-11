// https://leetcode.com/problems/make-the-string-great/

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  if (s.length <= 1) {
    return s;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];
    console.log(top, s[i]);
    if (
      stack.length > 0 &&
      top.toUpperCase() == s[i].toUpperCase() &&
      top != s[i]
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    console.log(stack);
  }
  return stack.join("");
};
