function chunk(list, chunkSize) {
  return [...Array(Math.ceil(list.length / chunkSize))].map((_) =>
    list.splice(0, chunkSize)
  );
}

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 6);

// solution 2 using generators
function* chunks2(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

let someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log([...chunks2(someArray, 2)]);
