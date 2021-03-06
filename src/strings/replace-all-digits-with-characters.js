// https://leetcode.com/problems/replace-all-digits-with-characters/
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let res = "";

  for (let i = 0; i < s.length; i += 2) {
    const code = s[i].charCodeAt() + +s[i + 1];
    const str = s[i + 1] ? String.fromCharCode(code) : "";
    res += s[i] + str;
  }

  return res;
};

// sol 2
var replaceDigits = function (s) {
  return [...s].reduce(
    (acc, cur, idx) =>
      idx % 2
        ? acc + String.fromCharCode(s[idx - 1].charCodeAt() + Number(cur))
        : acc + cur,
    ""
  );
};
