// https://stackoverflow.com/questions/22015684/how-do-i-zip-two-arrays-in-javascript

var a = [1, 2, 3];
var b = ["a", "b", "c"];

// output [[1, a], [2, b], [3, c]]

// solution
a.reduce((res, cv, i) => [...res, [cv, b[i]]], []);
