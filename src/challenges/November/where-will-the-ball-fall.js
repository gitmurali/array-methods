// https://leetcode.com/problems/where-will-the-ball-fall/
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
  let m = grid.length,
    n = grid[0].length,
    ans = [];
  for (let start = 0; start < n; start++) {
    let j = start;
    for (let i = 0; i < m; i++) {
      let dir = grid[i][j];
      if (dir === grid[i][j + dir]) j += dir;
      else (i = m), (j = -1);
    }
    ans[start] = j;
  }
  return ans;
};
