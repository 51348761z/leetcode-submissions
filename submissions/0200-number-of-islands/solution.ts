function numIslands(grid: string[][]): number {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ] as const;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let islandCount = 0;
  const isInsideGrid = (row: number, col: number) => {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] !== "1" || visited[row][col]) continue;

      islandCount++;
      visited[row][col] = true;
      // BFS
      const queue: [number, number][] = [[row, col]];
      let head = 0;

      while (head < queue.length) {
        const [currentRow, currentCol] = queue[head++];

        for (const [rowChange, colChange] of directions) {
          const nextRow = currentRow + rowChange;
          const nextCol = currentCol + colChange;

          if (
            !isInsideGrid(nextRow, nextCol) ||
            grid[nextRow][nextCol] !== "1" ||
            visited[nextRow][nextCol]
          )
            continue;

          visited[nextRow][nextCol] = true;
          queue.push([nextRow, nextCol]);
        }
      }
    }
  }
  return islandCount;
}
