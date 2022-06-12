// https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/submissions/

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let count = 0;
  let max = 0;
  for (const val of rectangles) {
    let min = Math.min(val[0], val[1]);

    if (min > max) {
      count = 0;
      max = min;
    }

    if (min === max) count++;
  }

  return count;
};
