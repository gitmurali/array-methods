const foo = {
  results: [
    {
      id: 12,
      name: "Test"
    },
    {
      id: 2,
      name: "Beispiel"
    },
    {
      id: 3,
      name: "Sample"
    }
  ]
};
foo.results.find((item) => item.id === 2);
