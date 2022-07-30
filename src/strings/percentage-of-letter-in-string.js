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

const percentageLetter1 = (s, letter) =>
  Math.floor(((s.length - s.replaceAll(letter, "").length) * 100) / s.length);
