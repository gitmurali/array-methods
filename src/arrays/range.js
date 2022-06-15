const range = (start, stop, step = 1) => {
  return [...Array(stop - start).keys()]
    .filter((i) => !(i % Math.round(step)))
    .map((v) => start + v);
};
