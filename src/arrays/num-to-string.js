const arrays = [1, 2, 3, 4, 5, 6];

// 1
arrays.map(String);

// 2
Array.from(arrays, (x) => `${x}`);
