import { includes } from "../index";

describe("array methods", () => {
  describe("includes function", () => {
    it("should return the includes value", () => {
      expect(
        includes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value === 6)
      ).toBeTruthy();
    });

    it("should return falsy if theres no value in it.", () => {
      expect(
        includes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (value) => value === 40)
      ).toBeFalsy();
    });
  });
});
