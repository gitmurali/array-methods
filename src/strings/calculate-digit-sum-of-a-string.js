// https://leetcode.com/problems/calculate-digit-sum-of-a-string/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  let j = s;

  while (j.length > k) {
    let a = "";
    for (let i = 0; i < j.length; i += 3) {
      const group = j.slice(i, i + k);
      const res = [...group].reduce((res, cv) => res + +cv, 0);
      a += res;
    }
    j = a;
  }

  return j;
};
