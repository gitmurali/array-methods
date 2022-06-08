var a = [
  [12, "CCC"],
  [58, "AAA"],
  [57, "DDD"],
  [28, "CCC"],
  [18, "BBB"]
];
a.sort((a, b) => a[1].localeCompare(b[1]));
console.log(a);
