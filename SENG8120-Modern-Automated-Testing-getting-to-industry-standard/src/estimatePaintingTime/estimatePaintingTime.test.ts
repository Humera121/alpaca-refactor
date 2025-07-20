import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  it('calculates painting time for valid inputs', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });

  it('throws error for zero or negative area or painting speed', () => {
    expect(() => estimatePaintingTime(0, 10)).toThrow();
    expect(() => estimatePaintingTime(100, 0)).toThrow();
    expect(() => estimatePaintingTime(-100, 10)).toThrow();
    expect(() => estimatePaintingTime(100, -5)).toThrow();
  });
});
