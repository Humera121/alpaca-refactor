import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  it('should convert area correctly for valid input', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78);
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });

  it('should throw an error for negative area', () => {
    expect(() => convertAreaToSquareFeet(-100)).toThrow();
    expect(() => convertAreaToSquareFeet(-1)).toThrow();
  });
});

