class Solution {
  /**
   * @param {character[][]} grid
   * @return {number}
   */
  numIslands(grid: string[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let islandCount = 0;
    const isInsideGrid = (row: number, col: number) =>
      row >= 0 && row < rows && col >= 0 && col < cols;
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ] as const;

    for (let r = 0; r < rows; ++r) {
      for (let c = 0; c < cols; ++c) {
        if (grid[r][c] !== "1" || visited[r][c]) continue;

        islandCount++;
        visited[r][c] = true;
        // DFS - LIFO
        // const stack: [number, number][] = [[r, c]];
        // BFS - FIFO
        const queue: [number, number][] = [[r,c]]
        let head = 0

        while (head<queue.length) {
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
}
