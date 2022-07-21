// https://leetcode.com/problems/destination-city/

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const map = {};
  let res = "";
  for (const path of paths) {
    map[path[0]] = path[1];
  }

  Object.values(map).forEach((val) => {
    if (!map[val]) {
      res = val;
    }
  });

  return res;
};
