// https://leetcode.com/problems/ugly-number/
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (num) {
  for (const p of [2, 3, 5]) while (num && num % p === 0) num /= p;

  return num == 1;
};
