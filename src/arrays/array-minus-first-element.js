const myarray = ["item 1", "item 2", "item 3", "item 4"];

//solution 1 return rest of elements except first element.
myarray.slice(1);

//solution 2
myarray.shift();
console.log(myarray);

//solution 3 ignore first element and return the rest.
const [, ...rest] = myarray;
console.log(rest);
