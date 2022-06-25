// https://stackoverflow.com/questions/6259515/how-can-i-split-a-string-into-segments-of-n-characters

var str = "abcdefghijkl";
console.log(str.match(/.{1,3}/g));

var arr = str.split(/(?<=^(?:.{3})+)(?!$)/);
