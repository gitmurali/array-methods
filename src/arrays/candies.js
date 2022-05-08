//leetcode - https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let max = 0;
  let result = [];
  for (const val of candies) {
    val > max && (max = val);
  }
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= max);
  }

  return result;
};

// solutiion2
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map((candy) => candy + extraCandies >= max);
};
