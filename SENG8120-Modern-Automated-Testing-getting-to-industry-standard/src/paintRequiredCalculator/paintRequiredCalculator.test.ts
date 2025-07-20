import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paintRequiredCalculator", () => {
  it("should calculate paint required for valid inputs", () => {
    expect(paintRequiredCalculator(100, 10)).toBe(10);
    expect(paintRequiredCalculator(45, 15)).toBe(3);
  });

  it("should throw error if area or coverage per liter is zero or negative", () => {
    expect(() => paintRequiredCalculator(0, 10)).toThrow();
    expect(() => paintRequiredCalculator(100, 0)).toThrow();
    expect(() => paintRequiredCalculator(-100, 10)).toThrow();
    expect(() => paintRequiredCalculator(100, -5)).toThrow();
  });
});
