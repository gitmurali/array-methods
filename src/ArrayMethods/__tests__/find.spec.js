import { find } from "../index";

describe("array methods", () => {
  describe("find function", () => {
    it("should return the find value", () => {
      expect(
        find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value === 6)
      ).toStrictEqual(6);
    });

    it("should return value if theres no init value", () => {
      expect(
        find([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value === 10)
      ).toStrictEqual(10);
    });
  });
});
