// https://stackoverflow.com/questions/8188548/splitting-a-js-array-into-n-arrays

function splitToChunks(array, parts) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

splitToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3);
