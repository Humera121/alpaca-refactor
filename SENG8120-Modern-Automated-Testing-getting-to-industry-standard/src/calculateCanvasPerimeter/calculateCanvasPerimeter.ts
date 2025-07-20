// File: calculateCanvasPerimeter.ts
export default function calculateCanvasPerimeter(
  length: number,
  width: number
): number {
  if (length <= 0 || width <= 0) {
    throw new Error("Length and width must be positive numbers.");
  }

  return 2 * (length + width);
}

