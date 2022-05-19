const remove = (arr, value) => {
  return arr.filter((v) => v !== value);
};

console.log(remove(["yahoo", "google", "spotify"], "google"));
