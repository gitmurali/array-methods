// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let ans = 0;
  for (let i = 1; i < colors.length; i++) {
    if (colors.charAt(i) === colors.charAt(i - 1)) {
      ans += Math.min(neededTime[i], neededTime[i - 1]);
      neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
    }
  }

  return ans;
};
