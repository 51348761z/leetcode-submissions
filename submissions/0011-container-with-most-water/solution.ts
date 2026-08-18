function maxArea(height: number[]): number {
  let maximun = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    const area = width * minHeight;

    maximun = Math.max(area, maximun);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maximun;
}
