import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  it('calculates paint cost correctly for valid inputs', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(3, 7.5)).toBeCloseTo(22.5);
  });

  it('throws error when paint required or cost is zero or negative', () => {
    expect(() => calculatePaintCost(0, 5)).toThrow();
    expect(() => calculatePaintCost(10, 0)).toThrow();
    expect(() => calculatePaintCost(-5, 5)).toThrow();
    expect(() => calculatePaintCost(10, -5)).toThrow();
  });
});
