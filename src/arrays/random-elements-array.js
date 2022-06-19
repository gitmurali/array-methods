// random elements fisher yates alg

// solution 1
function random(arr, n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    let idx = Math.floor(Math.random() * arr.length);
    res.push(arr[idx]);
    arr.splice(idx, 1);
  }

  return res;
}

random([1, 2, 3, 4, 5], 3);

// solution 2
const pickRandom = (arr, count) => {
  let _arr = [...arr];
  return [...Array(count)].map(
    () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
  );
};
pickRandom([1, 2, 3, 4, 5], 3);
