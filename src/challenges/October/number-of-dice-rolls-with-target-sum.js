// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/submissions/
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (d, f, target) {
  const MOD = 1e9 + 7;
  const memo = new Map();

  return findWays(d, 0);

  function findWays(k, sum) {
    const key = `${k}#${sum}`;

    // base case
    if (k == 0) return sum == target ? 1 : 0;
    if (sum > target) return 0;
    if (memo.has(key)) return memo.get(key);

    let count = 0;

    for (let face = 1; face <= f; face++) {
      count = (count + findWays(k - 1, sum + face)) % MOD;
    }

    memo.set(key, count);
    return count;
  }
};
