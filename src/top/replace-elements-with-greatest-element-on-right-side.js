// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let max = -1;
  let a;
  for (let i = arr.length - 1; i >= 0; --i) {
    a = arr[i];
    arr[i] = max;
    max = Math.max(max, a);
  }
  return arr;
};
