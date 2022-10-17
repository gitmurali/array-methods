// https://leetcode.com/problems/pascals-triangle/
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let p = [];
  for (let i = 0; i < numRows; i++) {
    p[i] = [1];
    for (let j = 1; j < i; j++) {
      p[i][j] = p[i - 1][j - 1] + p[i - 1][j];
    }
    p[i][i] = 1;
  }
  return p;
};
