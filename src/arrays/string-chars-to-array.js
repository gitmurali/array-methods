const word = "Hello world!";

//solution 1
word.split('')

//solution 2
[...word]

//solution 3
Array.from(word);

//solution 4
Object.assign([], word);