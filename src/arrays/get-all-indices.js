function getAllIndexes(arr, val) {
  let i = -1;
  const result = [];

  while ((i = arr.indexOf(val, i + 1)) != -1) {
    result.push(i);
  }

  return result;
}

getAllIndexes(["Nano", "Volvo", "BMW", "Nano", "VW", "Nano"], "Nano");
