// https://leetcode.com/problems/maximum-number-of-words-you-can-type/

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let lettersArray = brokenLetters.split("");
  return text.split(" ").filter((word) => {
    return !lettersArray.some((letter) => word.includes(letter));
  }).length;
};
