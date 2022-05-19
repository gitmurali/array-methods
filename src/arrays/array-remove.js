const remove = (arr, value) => {
  return arr.filter((v) => v !== value);
};

const remove2 = (arr, val) => {
  const set = new Set(arr);
  set.delete(val);
  return [...set];
};

const remove3 = (arr, val) => {
  const idx = arr.indexOf(val);
  if (idx !== -1) {
    arr.splice(idx, 1);
  }
  return arr;
};

console.log(remove(["yahoo", "google", "spotify"], "google"));
console.log(remove2(["yahoo", "google", "spotify"], "google"));
console.log(remove3(["yahoo", "google", "spotify"], "google"));
