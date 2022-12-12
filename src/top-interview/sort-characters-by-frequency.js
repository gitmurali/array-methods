// https://leetcode.com/problems/sort-characters-by-frequency/description/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const charMap = s.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sortedArr = Object.keys(charMap).sort(
    (a, b) => charMap[b] - charMap[a]
  );
  return sortedArr.reduce((acc, cur) => acc + cur.repeat(charMap[cur]), "");
};
