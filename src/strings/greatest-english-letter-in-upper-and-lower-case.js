// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function (s) {
  let index = 0;
  [...s].forEach((val, i) => {
    const code = val.charCodeAt();
    if (code >= 97 && code <= 122) {
      const capital = String.fromCharCode(code - 32);
      if (s.includes(capital) && code > index) {
        index = code;
      }
    }
  });

  return index === 0 ? "" : String.fromCharCode(index - 32);
};
