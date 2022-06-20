// solution 1
function getAllIndexes(arr, val) {
  let i = -1;
  const result = [];

  while ((i = arr.indexOf(val, i + 1)) != -1) {
    result.push(i);
  }

  return result;
}

// solution 2
function getAllIndexes1(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

getAllIndexes(["Nano", "Volvo", "BMW", "Nano", "VW", "Nano"], "Nano");
getAllIndexes1(["Nano", "Volvo", "BMW", "Nano", "VW", "Nano"], "Nano");
