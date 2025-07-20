export default function paintRequiredForMultipleCoats(
  area: number,
  coveragePerLiter: number,
  coats: number
): number {
  if (area <= 0) {
    throw new Error('Area must be a positive number.');
  }

  if (coveragePerLiter <= 0) {
    throw new Error('Coverage per liter must be a positive number.');
  }

  if (coats <= 0 || !Number.isInteger(coats)) {
    throw new Error('Number of coats must be a positive integer.');
  }

  return (area / coveragePerLiter) * coats;
}
