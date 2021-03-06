// https://stackoverflow.com/questions/8188548/splitting-a-js-array-into-n-arrays

function splitToChunks(array, parts) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

splitToChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3);

// solution 2
function split(array, n) {
  let [...arr] = array;
  var res = [];
  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
}

split([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3);
