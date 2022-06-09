// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {
  for (const word of words) {
    if (word.split("").reverse().join("") === word) {
      return word;
    }
  }
  return "";
};

// Efficient solution
function firstPalindrome1(words) {
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }

  return "";
}

function isPalindrome(word) {
  for (let i = 0, j = word.length - 1; i < j; i++, j--) {
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}
