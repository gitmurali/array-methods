import { indexOf } from "../index";

describe("array methods", () => {
  describe("indexOf function", () => {
    it("should return the indexOf value", () => {
      expect(
        indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value === 11)
      ).toStrictEqual(-1);
    });

    it("should return value if theres no init value", () => {
      expect(
        indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value === 10)
      ).toStrictEqual(9);
    });
  });
});
