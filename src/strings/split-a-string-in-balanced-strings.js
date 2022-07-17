// https://leetcode.com/problems/split-a-string-in-balanced-strings/
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let balance = 0;
  let matches = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      balance -= 1;
    } else if (s[i] === "L") {
      balance += 1;
    }

    if (balance === 0) {
      matches += 1;
    }
  }

  return matches;
};
