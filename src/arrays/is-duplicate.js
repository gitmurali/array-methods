var values = [
  { name: "someName1" },
  { name: "someName2" },
  { name: "someName4" },
  { name: "someName2" }
];

var valueArr = values.map(function (item) {
  return item.name;
});
var isDuplicate = valueArr.some(function (item, idx) {
  return valueArr.indexOf(item) != idx;
});
console.log(isDuplicate);
