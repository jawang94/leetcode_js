// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// 11110
// 11010
// 11000
// 00000
// Answer: 1

// Example 2:

// 11000
// 11000
// 00100
// 00011
// Answer: 3
/**
 * @param {character[][]} grid
 * @return {number}
 */

var numIslands = function(grid) {
  let islands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        islands++;
        explore(grid, i, j);
      }
    }
  }
  return islands;
};

function explore(grid, x, y) {
  if (
    x < 0 ||
    x >= grid.length ||
    y < 0 ||
    y >= grid[0].length ||
    grid[x][y] != "1"
  ) {
    return;
  }
  grid[x][y] = "0";
  explore(grid, x + 1, y);
  explore(grid, x - 1, y);
  explore(grid, x, y + 1);
  explore(grid, x, y - 1);
}
