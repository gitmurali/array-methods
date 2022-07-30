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

// solution 2
const percentageLetter1 = (s, letter) =>
  Math.floor(((s.length - s.replaceAll(letter, "").length) * 100) / s.length);

// solution 3
var percentageLetter2 = function (s, letter) {
  let letterFilter = s.split("").filter((char) => char == letter);

  return Math.trunc((letterFilter.length / s.length) * 100);
};
