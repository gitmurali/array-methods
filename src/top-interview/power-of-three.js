// https://leetcode.com/problems/power-of-three/description/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 0) return false;
  if (n === 1) return true;

  return isPowerOfThree(n / 3);
};

// example 2
var isPowerOfThree = function (n) {
  while (n > 1) {
    if (n % 3 === 0) n /= 3;
    else break;
  }
  return n === 1;
};
