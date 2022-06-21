// random elements
[...Array(40)].map((e) => ~~(Math.random() * 40));

// random elements 1
Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));
