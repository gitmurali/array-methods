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

console.log(previousItem([1, 2, 3, 4, 5]));
