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

// solution 2
const minCost1 = (s, cost) => {
  let res = 0;
  for (let i = 0, max = 0; i < s.length; i++) {
    res += cost[i];
    max = Math.max(max, cost[i]);
    if (s[i] !== s[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};
