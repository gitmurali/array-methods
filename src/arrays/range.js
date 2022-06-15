const range = (start, stop, step = 1) => {
  return [...Array(stop - start).keys()]
    .filter((i) => !(i % Math.round(step)))
    .map((v) => start + v);
};

range(0, 8); // [0, 1, 2, 3, 4, 5, 6, 7]
range(4, 9); // [4, 5, 6, 7, 8]
range(4, 9, 2); // [4, 6, 8]
range(4, 9, 3); // [4, 7]

//using generator

function* range(x, y) {
  while (true) {
    if (x <= y) yield x++;
    else return null;
  }
}
const infiniteRange = (x) => range(x, Infinity);

console.log(
  Array.from(range(1, 10)) // [1,2,3,4,5,6,7,8,9,10]
);

console.log(infiniteRange(1000000).next());

// another function.
function range1(start, end) {
  return [...Array(1 + end - start).keys()].map((v) => start + v);
}
