// https://leetcode.com/problems/reverse-vowels-of-a-string/submissions/
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let i = 0;
  let j = s.length - 1;

  const arr = [...s];

  while (i < j) {
    if (vowels.indexOf(arr[i]) !== -1 && vowels.indexOf(arr[j]) !== -1) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      ++i;
      --j;
    }

    if (vowels.indexOf(arr[i]) == -1) {
      ++i;
    }

    if (vowels.indexOf(arr[j]) == -1) {
      --j;
    }
  }
  return arr.join("");
};
