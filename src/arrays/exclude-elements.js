// return excluding first element of arr.
// [1, 55, 77, 88, 99, 22, 33, 44] // ...would return [88, 99, 22, 33, 44]

const arr = [1, 55, 77, 88, 99, 22, 33, 44];
arr.slice(Math.max(arr.length - 5, 1));
