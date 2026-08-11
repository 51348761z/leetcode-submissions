class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  numIslands(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    const isInsideGrid = (row: number, col: number) =>
      row >= 0 && row < rows && col >= 0 && col < cols;
    let islandCount = 0;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] !== "1") continue;

        islandCount++;
        grid[r][c] = "0";
        const stack: [number, number][] = [[r, c]];

        while (stack.length > 0) {
          const [currentRow, currentCol] = stack.pop();
          for (const [rowChange, colChange] of directions) {
            const nextRow = currentRow + rowChange;
            const nextCol = currentCol + colChange;

            if (!isInsideGrid(nextRow, nextCol) || grid[nextRow][nextCol] !== "1") continue;

            grid[nextRow][nextCol] = "0";
            stack.push([nextRow, nextCol]);
          }
        }
      }
    }
    return islandCount;
  }
}
