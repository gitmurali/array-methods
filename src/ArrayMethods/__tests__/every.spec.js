import { every } from "../index";

describe("every", () => {
  it("every examples", () => {
    expect(every([2, 4, 6, 8, 10], (number) => number % 2 === 0)).toBeTruthy();
  });

  it("every example 2", () => {
    expect(
      every([1, 2, 4, 6, 8, 10], (number) => number % 2 === 0)
    ).toBeFalsy();
  });
});
