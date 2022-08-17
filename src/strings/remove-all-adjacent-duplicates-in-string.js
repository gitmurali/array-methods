// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const st = [];

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && s[i] === st[st.length - 1]) {
      st.pop();
    } else {
      st.push(s[i]);
    }
  }

  return st.join("");
};
