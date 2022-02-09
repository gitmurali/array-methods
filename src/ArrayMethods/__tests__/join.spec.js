import { join } from "../index";

describe("array methods", () => {
  describe("find function", () => {
    it("should return the find value", () => {
      expect(join([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "->")).toBe(
        "1->2->3->4->5->6->7->8->9->10"
      );
    });

    it("should return value if theres no init value", () => {
      expect(join([1, 2, 3, 4, 5, 6], "*")).toBe("1*2*3*4*5*6");
    });
  });
});
