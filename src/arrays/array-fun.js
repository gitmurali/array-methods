[[[[[[[[[2]]]]]]]]] == 2; // true

var a = [0, 1, 2, 3];
a[[2]] === a[2]; // this is true

var a = { abc: 1 };
a[["abc"]] === a["abc"]; // this is also true
