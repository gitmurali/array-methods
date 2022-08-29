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

  return [...s]
    .reduce((res, cv) => {
      const letter = cv.charCodeAt();
      if (letter >= 97 && letter <= 122) {
        res[j] = cv;
        j += 2;
      } else {
        res[k] = cv;
        k += 2;
      }
      return res;
    }, [])
    .join("");
};
