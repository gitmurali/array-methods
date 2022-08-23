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

// solution 2
const findWords1 = function (words) {
  return words.filter(function (word) {
    let row1 = word
      .split("")
      .every((c) => "qwertyuiop".indexOf(c.toLowerCase()) > -1);
    let row2 = word
      .split("")
      .every((c) => "asdfghjkl".indexOf(c.toLowerCase()) > -1);
    let row3 = word
      .split("")
      .every((c) => "zxcvbnm".indexOf(c.toLowerCase()) > -1);
    return row1 || row2 || row3;
  });
};
