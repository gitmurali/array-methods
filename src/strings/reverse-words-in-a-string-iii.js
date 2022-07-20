//https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const result = s.split(" ").reduce((res, cv) => {
    res = res + cv.split("").reverse().join("") + " ";
    return res;
  }, "");

  return result.trim();
};
