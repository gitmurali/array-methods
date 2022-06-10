// https://leetcode.com/problems/minimum-time-visiting-all-points/

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let time = 0;
  for (let i = 1; i < points.length; ++i) {
    let p0 = points[i - 1];
    let p1 = points[i];
    time += Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]));
  }
  return time;
};
