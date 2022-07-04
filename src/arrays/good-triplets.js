//https://leetcode.com/problems/count-good-triplets/
var countGoodTriplets = function (arr, a, b, c) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) > a) continue;
      for (let k = j + 1; k < arr.length; k++) {
        if (Math.abs(arr[j] - arr[k]) > b) continue;
        if (Math.abs(arr[k] - arr[i]) <= c) res++;
      }
    }
  }
  return res;
};
