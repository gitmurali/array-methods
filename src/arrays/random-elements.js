// random elements
[...Array(40)].map((e) => ~~(Math.random() * 40));

// random elements 1
Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));

//random elements - no duplicates
for (var a = [], i = 0; i < 40; ++i) a[i] = i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}

a = shuffle(a);
