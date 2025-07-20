export default function estimatePaintingTime(
  area: number,
  paintingSpeed: number
): number {
  if (area <= 0) {
    throw new Error('Area must be a positive number.');
  }
  if (paintingSpeed <= 0) {
    throw new Error('Painting speed must be a positive number.');
  }

  return area / paintingSpeed;
}

