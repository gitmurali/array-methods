// https://leetcode.com/problems/find-the-highest-altitude/submissions/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let alt = [0];
  // let res = 0;

  for (let i = 1; i <= gain.length; i++) {
    alt[i] = alt[i - 1] + gain[i - 1];
    // res = alt[i] > res ? alt[i] : res;
  }

  return Math.max(...alt);
};

const largestAltitude2 = (gain) => {
  return Math.max(
    ...gain.reduce((acc, cv, i) => (acc.push(cv + acc[i]), acc), [0])
  );
};
