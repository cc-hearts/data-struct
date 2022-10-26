/**
 * @author heart
 * @description
 * @Date 2022-10-25
 */
function shortestBridge(grid: number[][]): number {
  // 先找到任意一座岛屿
  // 能够移动的方向
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const n = grid.length,
    m = grid[0].length;
  const isLanded: Array<number[]> = []; // 存储一个岛屿的节点
  end: for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        isLanded.push([i, j]);
        grid[i][j] = -1;
        break end;
      }
    }
  }
  // 添加全部队列
  const queue = [...isLanded];
  while (queue.length > 0) {
    const cell = [...queue.shift()!];
    for (let i = 0; i < dirs.length; i++) {
      const x = cell[0] + dirs[i][0],
        y = cell[1] + dirs[i][1];
      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 1) {
        grid[x][y] = -1;
        queue.push([x, y]);
        isLanded.push([x, y]);
      }
    }
  }
  let step = 0;
  // 对岛屿进行bfs搜索
  sw: while (isLanded.length !== 0) {
    let loop = [...isLanded];
    isLanded.length = 0;
    for (let i = 0; i < loop.length; i++) {
      const cell = loop[i];
      for (let i = 0; i < dirs.length; i++) {
        const x = cell[0] + dirs[i][0];
        const y = cell[1] + dirs[i][1];
        if (x >= 0 && x < m && y >= 0 && y < n) {
          if (grid[x][y] === 0) {
            grid[x][y] = -1;
            isLanded.push([x, y]);
          } else if (grid[x][y] === 1) {
            break sw;
          }
        }
      }
    }
    step++;
  }
  return step;
}

// console.log(
//   shortestBridge([
//     [0, 1],
//     [1, 0],
//   ])
// );
// console.log(
//   shortestBridge([
//     [0, 1, 0],
//     [0, 0, 0],
//     [0, 0, 1],
//   ])
// );
// console.log(
//   shortestBridge([
//     [1, 1, 1, 1, 1],
//     [1, 0, 0, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 0, 0, 1],
//     [1, 1, 1, 1, 1],
//   ])
// );
