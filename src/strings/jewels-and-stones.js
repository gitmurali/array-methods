// https://leetcode.com/problems/jewels-and-stones/
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  const map = {};
  let cnt = 0;
  for (let i = 0; i < stones.length; i++) {
    if (map[stones[i]]) {
      map[stones[i]] += 1;
    } else {
      map[stones[i]] = 1;
    }
  }

  for (let i = 0; i < jewels.length; i++) {
    if (map[jewels[i]]) {
      cnt += map[jewels[i]];
    }
  }

  return cnt;
};
