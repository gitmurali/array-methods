// random elements fisher yates alg

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
