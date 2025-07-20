import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  it('calculates total cost correctly for valid inputs', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(0, 75)).toBe(75);
    expect(calculateTotalCost(200, 0)).toBe(200);
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

   it('throws error when paint or labor cost is negative', () => {
  expect(() => calculateTotalCost(-100, 50)).toThrow();
  expect(() => calculateTotalCost(100, -50)).toThrow();
  expect(() => calculateTotalCost(-100, -50)).toThrow();
});
});


 
  test('should return 0 when both costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);
  });

