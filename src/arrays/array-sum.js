function previousItem() {
  let [args] = Object.values(arguments);
  let len = args.length;
  let arr = Array(len).fill(0);
  arr[0] = args[0] + args[len - 1];

  for (let i = 1; i < len; i++) {
    arr[i] = args[i] + arr[i - 1];
  }

  return arr;
}

function previousItem2() {
  let [args] = Object.values(arguments);
  let arr = [];
  arr[0] = args[0] + args[args.length - 1];
  return args.reduce((acc, cv, idx) => {
    if (idx > 0) {
      acc[idx] = acc[idx - 1] + args[idx];
    }
    return acc;
  }, arr);
}

console.log(previousItem2([1, 2, 3, 4, 5]));
