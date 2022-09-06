// https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/
/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (i % k === 0) {
      let word = s.slice(i, i + k);
      if (word.length !== k) {
        res.push(word + fill.repeat(k - word.length));
      } else {
        res.push(word);
      }
    }
  }
  console.log(res);
  return res;
};
