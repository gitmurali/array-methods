const person = {
  name: "Lokamn",
  dob: 12,
  print: function (value, value2) {
    console.log(this.dob + value + value2);
  }
};
const anotherPerson = {
  name: "Pappu",
  dob: 12
};

console.log(person.print.call(anotherPerson, 1, 2));
console.log(person.print.apply(anotherPerson, [1, 2]));

function somefunc1(val1, val2) {
  return this.name + val1 + val2;
}

const bind = somefunc1.bind(anotherPerson);
console.log(bind(1, 2));
