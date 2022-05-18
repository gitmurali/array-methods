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
