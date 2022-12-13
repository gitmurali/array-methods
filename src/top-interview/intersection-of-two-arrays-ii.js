// https://leetcode.com/problems/intersection-of-two-arrays-ii/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const arr = [];
  const map = new Map();
  for (let n of nums1) map.set(n, (map.get(n) || 0) + 1);

  for (let m of nums2)
    if (map.get(m) > 0) {
      arr.push(m);
      map.set(m, map.get(m) - 1);
    }

  return arr;
};
