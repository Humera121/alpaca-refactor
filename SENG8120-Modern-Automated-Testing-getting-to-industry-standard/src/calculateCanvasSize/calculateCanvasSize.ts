// File: calculateCanvasSize.ts
export default function calculateCanvasSize(
  length: number,
  width: number
): number {
  if (length <= 0 || width <= 0) {
    throw new Error('Length and width must be positive numbers.');
  }

  return length * width;
}
