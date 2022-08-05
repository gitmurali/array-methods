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

//sol 2
var canBeTypedWords = function (text, brokenLetters) {
  let words = text.split(" ");
  let count = 0;
  for (let word of words) {
    for (let i = 0; i < word.length; i++) {
      if (brokenLetters.includes(word[i])) {
        count++;
        break;
      }
    }
  }
  return words.length - count;
};
