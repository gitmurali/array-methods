const swapPositions = (array, a, b) => {
  [array[a], array[b]] = [array[b], array[a]];
  return array;
};

let array = [1, 2, 3, 4, 5];
swapPositions(array, 0, 1);
