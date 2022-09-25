// https://leetcode.com/problems/find-original-array-from-doubled-array/
/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  const n = changed.length;
  if (n % 2 === 1) return [];

  const original = [];
  const map = new Map();

  changed.sort((a, b) => a - b);

  for (let elm of changed) {
    const half = elm / 2;
    if (map.has(half) && map.get(half) > 0) {
      original.push(half);
      map.set(half, map.get(half) - 1);
    } else {
      map.set(elm, map.has(elm) ? map.get(elm) + 1 : 1);
    }
  }

  if (original.length !== n / 2) return [];
  return original;
};
