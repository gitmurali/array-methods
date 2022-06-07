const swapPositions = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
  return array;
};

let array = [1, 2, 3, 4, 5];
swapPositions(array, 0, 1);

// move
function move(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);
  return array;
}

var ar = [1, 2, 3, 4, 5];
move(ar, 0, 3);
