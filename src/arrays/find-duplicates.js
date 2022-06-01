const names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];
const map = {};

names.forEach((name) => {
  if (map[name]) {
    map[name] += 1;
  } else {
    map[name] = 1;
  }
});

const res = names.reduce((result, cv) => {
  if (map[cv] > 1) result = [...result, cv];
  return result;
}, []);

console.log([...new Set(res)]);

// solution 2

const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort(); // You can define the comparing function here.
  // JS by default uses a crappy string compare.
  // (we use slice to clone the array so the
  // original array won't be modified)
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
};

let duplicatedArray = [9, 9, 111, 2, 3, 4, 4, 5, 7];
console.log(
  `The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`
);
