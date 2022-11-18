// https://leetcode.com/problems/guess-number-higher-or-lower/
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let lower = 1;
  let higher = n - 1;
  while (lower <= higher) {
    const mid = Math.floor((lower + higher) / 2);
    const res = guess(mid);
    if (res === 0) return mid;
    if (res === 1) lower = mid + 1;
    else higher = mid - 1;
  }

  return lower;
};
