// https://leetcode.com/problems/determine-if-string-halves-are-alike/

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const s1 = s.slice(0, s.length / 2);
  const s2 = s.slice(s.length / 2);
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < s1.length; i++) {
    if (vowels.includes(s1[i])) {
      count1++;
    }
    if (vowels.includes(s2[i])) {
      count2++;
    }
  }

  return count1 === count2;
};

// sol2
var halvesAreAlike = function (S) {
  const vowels = "aeiouAEIOU";
  let mid = S.length / 2,
    ans = 0;
  for (let i = 0, j = mid; i < mid; i++, j++)
    ans += vowels.includes(S.charAt(i)) - vowels.includes(S.charAt(j));
  return ans === 0;
};
