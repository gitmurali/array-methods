// Will result in ['foo', 'bar']
const items = ["foo", ...(true ? ["bar"] : []), ...(false ? ["falsy"] : [])];

console.log(items);
