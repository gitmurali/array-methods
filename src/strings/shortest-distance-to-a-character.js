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

// solution 2

var shortestToChar1 = function (s, c) {
  const answer = Array(s.length).fill(Infinity);
  let l = Infinity,
    r = Infinity;

  for (let f = 0; f < s.length; f++) {
    let b = s.length - 1 - f;

    l = s[f] === c ? 0 : l + 1;
    r = s[b] === c ? 0 : r + 1;

    answer[f] = Math.min(answer[f], l);
    answer[b] = Math.min(answer[b], r);
  }

  return answer;
};
