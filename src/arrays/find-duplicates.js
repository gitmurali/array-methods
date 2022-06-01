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
