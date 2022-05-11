/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  const result = [first];
  encoded.map((val, idx) => result.push(result[idx] ^ val));
  return result;
};

//solution 2
// return encoded.reduce(
//   (acc, cv, i) => {
//     acc.push(acc[i] ^ cv);
//     return acc;
//   },
//   [first]
// );
