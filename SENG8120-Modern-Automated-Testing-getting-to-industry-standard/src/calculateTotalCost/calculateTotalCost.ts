export default function calculateTotalCost(
  paintCost: number,
  laborCost: number
): number {
  if (paintCost < 0 || laborCost < 0) {
    throw new Error('Paint cost and labor cost must be non-negative.');
  }

  return paintCost + laborCost;
}

