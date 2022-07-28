// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/

/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const map = {};

  for (let i = 0; i < num.length; i++) {
    map[i] = num[i];
  }

  for (const n of num) {
    map[n] = +map[n] - 1;
  }

  return Object.keys(map).every((key) => Number(map[key]) === 0);
};
