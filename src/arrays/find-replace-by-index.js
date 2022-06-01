//replace 3452 by 1010
var items = Array(523, 3452, 334, 31, ...5346);

var index = items.indexOf(3452);

if (index !== -1) {
  items[index] = 1010;
}

//or You can also use the ~ operator if you are into terse JavaScript and want to shorten the -1 comparison:

if (~index) {
  items[index] = 1010;
}
