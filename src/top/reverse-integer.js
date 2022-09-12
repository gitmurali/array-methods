// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const rev = Math.abs(x).toString().split("").reverse().join("");
  if (rev > 2 ** 31) return 0;
  return rev * Math.sign(x);
};
