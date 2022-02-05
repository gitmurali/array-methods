import { reduce } from "./index";

describe("array methods", () => {
  describe("reduce function", () => {
    it("should return the reduce value", () => {
      expect(
        reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (sum, value) => sum + value, 0)
      ).toBe(55);
    });

    it("should returns value if theres no init value", () => {
      expect(
        reduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (sum, value) => sum + value)
      ).toBe(55);
    });

    it("should return init value if theres no array", () => {
      expect(reduce([], (sum, value) => sum + value)).toBeUndefined();
    });
  });
});
