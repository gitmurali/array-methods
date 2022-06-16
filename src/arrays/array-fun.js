[[[[[[[[[2]]]]]]]]] == 2; // true
//the above array converts to this internally 2 === Number([2].valueOf().toString())

var a = [0, 1, 2, 3];
a[[2]] === a[2]; // this is true

var a = { abc: 1 };
a[["abc"]] === a["abc"]; // this is also true

[0] == false; // true
if ([0]) {
  /* executes */
} // [0] is both true and false!

var a = [0];
a == a; // true
a == !a; // also true, WTF?
