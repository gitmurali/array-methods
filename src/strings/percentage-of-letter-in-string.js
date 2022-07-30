// https://leetcode.com/problems/percentage-of-letter-in-string/

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let cnt = 0;
  for (const ch of s) {
    if (ch === letter) {
      cnt++;
    }
  }

  return Math.floor((cnt / s.length) * 100);
};
