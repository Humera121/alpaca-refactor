import calculateCanvasPerimeter from './calculateCanvasPerimeter';

describe('calculateCanvasPerimeter', () => {
  it('returns correct perimeter for valid inputs', () => {
    expect(calculateCanvasPerimeter(10, 100)).toBe(220);
    expect(calculateCanvasPerimeter(5, 5)).toBe(20);
  });

  it('throws an error for zero or negative inputs', () => {
    expect(() => calculateCanvasPerimeter(0, 5)).toThrow();
    expect(() => calculateCanvasPerimeter(-1, 5)).toThrow();
  });
});
