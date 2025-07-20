export default function calculatePaintCost(
  paintRequired: number,
  costPerLiter: number
): number {
  if (paintRequired <= 0 || costPerLiter <= 0) {
    throw new Error('Paint required and cost per liter must be positive numbers.');
  }

  return paintRequired * costPerLiter;
}
