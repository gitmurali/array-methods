// https://leetcode.com/problems/keyboard-row/
/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (w) =>
  w.filter(
    (word) =>
      /^[qwertyuiop]*$/i.test(word) ||
      /^[asdfghjkl]*$/i.test(word) ||
      /^[zxcvbnm]*$/i.test(word)
  );
