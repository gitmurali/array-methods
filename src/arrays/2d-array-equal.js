import _ from "underscore";

const array1 = [
  ["a", "b"],
  ["b", "c"]
];
const array2 = [
  ["b", "c"],
  ["a", "b"]
];

_.isEqual(_.sortBy(array1), _.sortBy(array2));
