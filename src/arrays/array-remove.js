const remove = (arr, value) => {
  return arr.filter((v) => v !== value);
};

const remove2 = (arr, val) => {
  const set = new Set(arr);
  set.delete(val);
  return [...set];
};

console.log(remove(["yahoo", "google", "spotify"], "google"));
console.log(remove2(["yahoo", "google", "spotify"], "google"));
