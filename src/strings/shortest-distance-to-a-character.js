// https://leetcode.com/problems/shortest-distance-to-a-character/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const indices = [];
  [...s].forEach((val, i) => {
    if (val === c) indices.push(i);
  });

  return [...s].reduce((res, cv, i) => {
    let min = Infinity;
    indices.forEach((val, j) => {
      min = Math.min(Math.abs(i - val), min);
    });

    return [...res, min];
  }, []);
};
