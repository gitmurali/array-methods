import { concat } from "../index";

describe("array methods", () => {
  describe("concat function", () => {
    it("should return the concat value", () => {
      expect(
        concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4])
      ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4]);
    });

    it("should return falsy if theres no value in it.", () => {
      expect(concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 9, [8])).toStrictEqual([
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        0,
        9,
        8
      ]);
    });
  });
});
