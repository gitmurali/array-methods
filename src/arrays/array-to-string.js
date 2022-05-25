let arr = [
  {
    name: "Joe",
    age: 22,
    toString: function () {
      return this.name;
    }
  },
  {
    name: "Kevin",
    age: 24,
    toString: function () {
      return this.name;
    }
  },
  {
    name: "Peter",
    age: 21,
    toString: function () {
      return this.name;
    }
  }
];

const result = arr.join(", ");
console.log(result);
