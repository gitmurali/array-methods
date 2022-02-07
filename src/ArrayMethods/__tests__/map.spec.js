import { map } from "../index";

describe("array methods", () => {
  describe("reduce function", () => {
    it("should return the reduce value", () => {
      expect(
        map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value * 10)
      ).toStrictEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    });

    it("should return value if theres no init value", () => {
      expect(
        map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value / 10)
      ).toStrictEqual([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]);
    });
  });
});
