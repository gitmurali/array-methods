const array = [1, 2, 3, 4, 5, 6];

function paginate(array, pageNumber, pageSize) {
  return array.slice((pageNumber - 1) * pageSize, pageSize * pageNumber);
}

paginate(array, 2, 5);
