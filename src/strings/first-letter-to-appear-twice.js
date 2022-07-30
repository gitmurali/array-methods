// https://leetcode.com/problems/first-letter-to-appear-twice/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const arr = [];
  for (const ch of s) {
    const code = ch.charCodeAt() - 97;
    if (arr[code]) {
      return ch;
    } else {
      arr[code] = 1;
    }
  }
};

var repeatedCharacter1 = function (s) {
  const dict = {};
  for (const char of s) {
    if (char in dict) return char;
    dict[char] = true;
  }
  return false;
};
