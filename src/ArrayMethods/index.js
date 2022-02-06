// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, number) => {
//   return sum + number;
// }, 0)

// reduce function
export function reduce(array, callback, initValue) {
  const { length } = array;

  let acc = initValue;
  let startAtIndex = 0;

  if (initValue === undefined) {
    acc = array[0];
    startAtIndex = 1;
  }

  for (let index = startAtIndex; index < length; index++) {
    const value = array[index];
    acc = callback(acc, value, index, array);
  }

  return acc;
}

// filter function
export function filter(array, callback) {
  const { length } = array;
  const result = [];

  for (let index = 0; index < length; index++) {
    const value = array[index];
    if (callback(value, index, array)) {
      result.push(value);
    }
  }

  return result;
}
