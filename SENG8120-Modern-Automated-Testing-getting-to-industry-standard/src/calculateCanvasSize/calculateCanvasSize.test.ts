import calculateCanvasSize from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  it('should calculate area correctly for valid inputs', () => {
    expect(calculateCanvasSize(10, 5)).toBe(50);
    expect(calculateCanvasSize(7, 3)).toBe(21);
  });

  it('should throw error if length or width is zero or negative', () => {
    expect(() => calculateCanvasSize(0, 5)).toThrow();
    expect(() => calculateCanvasSize(10, -1)).toThrow();
    expect(() => calculateCanvasSize(-5, -2)).toThrow();
  });
});
