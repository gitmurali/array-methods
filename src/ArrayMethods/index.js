//forEach function
export function forEach(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index++) {
    const value = array[index];
    callback(value, index, array);
  }
}

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

//map function
export function map(array, callback) {
  const { length } = array;
  const result = [];

  for (let index = 0; index < length; index++) {
    const value = array[index];
    result[index] = callback(value, index, array);
  }

  return result;
}

//findIndex
export function findIndex(array, callback) {
  const { length } = array;
  const result = [];

  for (let index = 0; index < length; index++) {
    const value = array[index];

    if (callback(value, index, array)) {
      return index;
    }
  }

  return result;
}

//find
export function find(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index++) {
    const value = array[index];

    if (callback(value, index, array)) {
      return array[index];
    }
  }

  return;
}

//indexOf
export function indexOf(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index++) {
    const value = array[index];

    if (callback(value, index, array)) {
      return index;
    }
  }

  return -1;
}

//lastIndexOf
export function lastIndexOf(array, callback) {
  const { length } = array;

  for (let index = length - 1; index > -1; index--) {
    const value = array[index];

    if (callback(value, index, array)) {
      return index;
    }
  }

  return -1;
}

//every
export function every(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index++) {
    const value = array[index];

    if (!callback(value, index, array)) {
      return false;
    }
  }

  return true;
}

//some
export function some(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index++) {
    const value = array[index];

    if (callback(value, index, array)) {
      return true;
    }
  }

  return false;
}

//includes
export function includes(array, callback) {}

//flattening
export function flat(array, callback) {}

//flat Map
export function flatMap(array, callback) {}

//concatening
export function concat(array, callback) {}

//join
//reverse
//shift
//unshift
//slice
//splice
//pop
//push
//fill
//values
//keys
//entries
