import { findIndex } from "../index";

describe("array methods", () => {
  describe("findIndex function", () => {
    it("should return the findIndex value", () => {
      expect(
        findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value === 6)
      ).toStrictEqual(5);
    });

    it("should return value if theres no init value", () => {
      expect(
        findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value === 10)
      ).toStrictEqual(9);
    });
  });
});
