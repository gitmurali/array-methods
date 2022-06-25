const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];

arr.map((elm, i) => {
  return elm.map(() => elm[i]);
});
