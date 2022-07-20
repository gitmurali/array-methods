// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 2] === "#") {
      result += String.fromCharCode(96 + Number(s[i] + s[i + 1]));
      i++;
    } else if (s[i] !== "#") {
      result += String.fromCharCode(96 + Number(s[i]));
    }
  }

  return result;
};
