// https://leetcode.com/problems/kth-distinct-string-in-an-array/

/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = {};
  const distinctArr = [];
  arr.forEach((val) => {
    if (!map[val]) {
      map[val] = 1;
    } else {
      map[val] += 1;
    }
  });

  for (let [key, val] of Object.entries(map))
    if (val == 1) distinctArr.push(key);

  return distinctArr[k - 1] || "";
};
