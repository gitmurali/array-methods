// https://leetcode.com/problems/make-the-string-great/

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  const stack = [""];

  for (const c of s) {
    if (c !== stack.at(-1) && c.toLowerCase() === stack.at(-1).toLowerCase()) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join("");
};
