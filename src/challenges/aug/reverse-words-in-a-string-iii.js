// https://leetcode.com/problems/reverse-words-in-a-string-iii/

// solution 1
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s
    .split(" ")
    .reduce((res, cv, j) => {
      return (
        res +
        cv.split("").reduce((acc, v, i, arr) => {
          return acc + arr[arr.length - i - 1];
        }, "") +
        " "
      );
    }, "")
    .trim();
};

// solution 2
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords3 = function (s) {
  s.split(" ")
    .reduce((res, cv) => res + cv.split("").reverse().join("") + " ", "")
    .trim();
};
