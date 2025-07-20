export default function calculateCanvasDiagonal(
  length: number,
  width: number
): number {
  if (length <= 0 || width <= 0) {
    throw new Error("Length and width must be positive numbers.");
  }

  return Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
}