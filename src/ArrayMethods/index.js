/**
 * forEach function
 * @param {Array} array
 * @param {functin} callback
 */
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

// includes
export function includes(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index++) {
    const value = array[index];

    if (callback(value, index, array)) {
      return true;
    }
  }

  return false;
}

// concat
export function concat(array, ...values) {
  const result = [...array];
  const { length } = values;

  for (let index = 0; index < length; index++) {
    const value = values[index];

    if (Array.isArray(value)) {
      result.push(...value);
    } else {
      result.push(value);
    }
  }

  return result;
}

//flattening [1,2,3,[9,8, [5,6]]].flat(2)
export function flat(array, depth = 0) {
  if (depth < 1 || !Array.isArray(array)) {
    return array;
  }
  // [9,8, [5,6]]
  return array.reduce(
    (result, curValue) => result.concat(flat(curValue, depth - 1)),
    []
  );
}

//flat Map
export function flatMap(array, callback) {
  return flat(map(array, callback), 1);
}

//join
export function join(array, joinWith) {
  return reduce(
    array,
    (result, current, index) => {
      if (index === 0) {
        return current;
      }

      return `${result}${joinWith}${current}`;
    },
    ""
  );
}

//reverse
export function reverse(array) {
  const result = [];
  const lastIndex = array.length - 1;
  for (let i = lastIndex; i > -1; i--) {
    const value = array[i];
    result[lastIndex - i] = value;
  }

  return result;
}

//slice
export function slice(array, startIndex = 0, endIndex = array.length) {
  const result = [];

  for (let index = startIndex; index < endIndex; index++) {
    const value = array[index];

    if (index < array.length) {
      result.push(value);
    }
  }

  return result;
}

//splice
export function splice(
  array,
  insertAtIndex,
  removeNumberOfElements,
  ...values
) {
  const firstPart = slice(array, 0, insertAtIndex);
  const secondPart = slice(array, insertAtIndex + removeNumberOfElements);
  const removedElements = slice(
    array,
    insertAtIndex,
    insertAtIndex + removeNumberOfElements
  );

  const joinedParts = firstPart.concat(values, secondPart);

  const { length: joinedPartsLen } = joinedParts;

  for (let index = 0; index < joinedPartsLen; index++) {
    array[index] = joinedParts[index];
  }

  array.length = joinedPartsLen;

  return removedElements;
}

//shift
export function shift(array) {
  const { length } = array;
  const firstValue = array[0];

  for (let index = 1; index < length; index++) {
    const value = array[index];
    array[index - 1] = value;
  }

  array.length = length - 1;

  return firstValue;
}

//unshift
export function unshift(array, ...values) {
  const mergedArrays = values.concat(array);
  const { length } = mergedArrays;

  for (let i = 0; i < length; i++) {
    const value = mergedArrays[i];
    array[i] = value;
  }

  return array.length;
}

//push
export function push(array, ...values) {
  const { length: arrayLen } = array;
  const { length: valuesLen } = values;

  for (let index = 0; index < valuesLen; index++) {
    array[arrayLen + index] = values[index];
  }

  return array.length;
}
//pop
export function pop(array) {
  const { length } = array;
  const value = array[length - 1];
  array.length = length - 1;

  return value;
}

//fill
export function fill(array) {}

//values
export function values(array) {}

//keys
export function keys(array) {}

//entries
export function entries(array) {}
