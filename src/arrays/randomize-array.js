function randomizeArray(array) {
  let currentIdx = array.length;
  let randomIndex;

  while (currentIdx !== 0) {
    randomIndex = Math.floor(Math.random() * currentIdx);
    currentIdx--;
    [array[currentIdx], array[randomIndex]] = [
      array[randomIndex],
      array[currentIdx]
    ];
  }

  return array;
}
var arr = [2, 11, 37, 42];
randomizeArray(arr);
console.log(arr);

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
