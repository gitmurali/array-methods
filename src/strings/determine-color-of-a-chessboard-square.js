// https://leetcode.com/problems/determine-color-of-a-chessboard-square/

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let isEven;
  for (let i = 0; i < coordinates.length; i++) {
    const val = coordinates[i];
    if (i === 0) {
      isEven = val.charCodeAt() % 2 === 0;
    } else {
      if (isEven) {
        return +val % 2 !== 0;
      } else {
        return +val % 2 === 0;
      }
    }
  }
};

// solution 2
var squareIsWhite = function (coordinates) {
  return coordinates[0].charCodeAt() % 2 !== parseInt(coordinates[1]) % 2;
};
