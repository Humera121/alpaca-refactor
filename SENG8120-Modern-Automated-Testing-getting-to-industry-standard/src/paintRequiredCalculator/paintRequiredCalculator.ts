export default function paintRequiredCalculator(
  area: number,
  coveragePerLiter: number
): number {
  if (area <= 0) {
    throw new Error('Area must be a positive number.');
  }

  if (coveragePerLiter <= 0) {
    throw new Error('Coverage per liter must be a positive number.');
  }

  return area / coveragePerLiter;
}
