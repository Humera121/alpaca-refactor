import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  it('calculates paint required for valid input', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });

  it('throws error for zero or negative values', () => {
    expect(() => paintRequiredForMultipleCoats(0, 10, 2)).toThrow();
    expect(() => paintRequiredForMultipleCoats(100, 0, 2)).toThrow();
    expect(() => paintRequiredForMultipleCoats(-100, 10, 2)).toThrow();
    expect(() => paintRequiredForMultipleCoats(100, -10, 2)).toThrow();
    expect(() => paintRequiredForMultipleCoats(100, 10, -2)).toThrow();
  });

  it('throws error for non-integer coats', () => {
    expect(() => paintRequiredForMultipleCoats(100, 10, 1.5)).toThrow();
  });
});
