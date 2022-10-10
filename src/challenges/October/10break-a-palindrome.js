// https://leetcode.com/problems/break-a-palindrome/
/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function (palindrome) {
  const n = palindrome.length;
  if (n === 1) return "";

  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (palindrome[i] !== "a") {
      return palindrome.substring(0, i) + "a" + palindrome.substring(i + 1);
    }
  }

  return palindrome.substring(0, n - 1) + "b";
};
