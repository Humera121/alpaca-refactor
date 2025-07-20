// File: calculateCanvasDiagonal.test.ts
import calculateCanvasDiagonal from './calculateCanvasDiagonal';

describe('calculateCanvasDiagonal', () => {
  it('should calculate correct diagonal using Pythagorean theorem', () => {
    expect(calculateCanvasDiagonal(3, 4)).toBeCloseTo(5);
    expect(calculateCanvasDiagonal(6, 8)).toBeCloseTo(10);
    expect(calculateCanvasDiagonal(5, 12)).toBeCloseTo(13);
  });

  it('should throw error for zero or negative inputs', () => {
    expect(() => calculateCanvasDiagonal(0, 5)).toThrow();
    expect(() => calculateCanvasDiagonal(-3, 4)).toThrow();
    expect(() => calculateCanvasDiagonal(3, -4)).toThrow();
  });
});
