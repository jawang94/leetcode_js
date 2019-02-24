// 96ms Implementing a Heap. Faster than ~91.3%
/**
 * @param {number[][]} grid
 * @return {number}
 */
function swimInWater(grid) {
  const H = grid.length;
  const W = H && grid[0].length;
  const pq = new Heap((a, b) => grid[a[0]][a[1]] - grid[b[0]][b[1]]);
  const seen = [...Array(H)].map(r => Array(W).fill(false));
  let max = 0;

  pq.push([0, 0]);
  seen[0][0] = true;
  while (true) {
    const [r, c] = pq.pop();
    max = Math.max(max, grid[r][c]);
    if (r === H - 1 && c === W - 1) {
      return max;
    }

    for (let [dr, dc] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      const rr = r + dr;
      const cc = c + dc;
      if (rr < 0 || cc < 0 || rr >= H || cc >= W || seen[rr][cc]) continue;
      seen[rr][cc] = true;
      pq.push([rr, cc]);
    }
  }
}

function Heap(compare = (a, b) => a - b) {
  const arr = [];
  return { push, pop, peek, size };
  function size() {
    return arr.length;
  }
  function push(v) {
    arr.push(v);
    bubble();
  }
  function pop() {
    const top = peek();
    const last = arr.pop();
    if (arr.length > 0) {
      arr[0] = last;
      sink();
    }
    return top;
  }
  function peek() {
    return arr[0];
  }
  function bubble() {
    let i = arr.length - 1;
    let p = (i - 1) >> 1;
    while (i !== 0 && compare(arr[i], arr[p]) < 0) {
      [arr[i], arr[p]] = [arr[p], arr[i]];
      i = p;
      p = (i - 1) >> 1;
    }
  }
  function sink() {
    let i = 0;
    for (;;) {
      let next = i;
      for (const childIdx of [i * 2 + 1, i * 2 + 2]) {
        if (childIdx < arr.length && compare(arr[childIdx], arr[next]) < 0) {
          next = childIdx;
        }
      }
      if (next === i) return;
      [arr[i], arr[next]] = [arr[next], arr[i]];
      i = next;
    }
  }
}
