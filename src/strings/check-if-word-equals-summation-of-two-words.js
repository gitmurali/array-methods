// https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const sum1 = [...firstWord].reduce((res, cv) => {
    let code = cv.charCodeAt() - 97;
    return res + code;
  }, "");

  const sum2 = [...secondWord].reduce((res, cv) => {
    let code = cv.charCodeAt() - 97;
    return res + code;
  }, "");

  const total = [...targetWord].reduce((res, cv) => {
    let code = cv.charCodeAt() - 97;
    return res + code;
  }, "");

  return Number(sum1) + Number(sum2) === Number(total);
};

// same as above but reduced code
var toInteger = (word) => {
  return [...word].reduce((res, cv) => {
    let code = cv.charCodeAt() - 97;
    return res + code;
  }, "");
};

var isSumEqual = function (firstWord, secondWord, targetWord) {
  const sum1 = toInteger(firstWord);
  const sum2 = toInteger(secondWord);
  const total = toInteger(targetWord);

  return Number(sum1) + Number(sum2) === Number(total);
};
