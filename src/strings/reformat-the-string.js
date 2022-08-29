// https://leetcode.com/problems/reformat-the-string/
/**
 * @param {string} s
 * @return {string}
 */
var reformat1 = function (s) {
  let a = [];
  let b = [];
  for (const c of s) {
    isNaN(c) ? a.push(c) : b.push(c);
  }

  if (a.length < b.length) {
    [a, b] = [b, a];
  }

  return a.length - b.length <= 1
    ? a.map((val, i) => val + (b[i] ? b[i] : "")).join("")
    : "";
};

/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let cnt1 = 0;
  let cnt2 = 0;
  let j = 0;
  let k = 1;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i].charCodeAt();
    if (letter >= 97 && letter <= 122) {
      cnt1++;
    } else {
      cnt2++;
    }
  }

  if (Math.abs(cnt1 - cnt2) > 1) return "";

  const result = [...s].reduce((res, cv) => {
    const letter = cv.charCodeAt();
    if (letter >= 97 && letter <= 122) {
      res[j] = cv;
      j += 2;
    } else {
      res[k] = cv;
      k += 2;
    }
    return res;
  }, []);

  if (
    (isNaN(result[result.length - 1]) && isNaN(result[result.length - 2])) ||
    (!isNaN(result[result.length - 1]) && !isNaN(result[result.length - 2]))
  ) {
    result.unshift(result.pop());
  }
};
