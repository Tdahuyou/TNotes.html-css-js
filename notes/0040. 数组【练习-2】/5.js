var arr = [
  [5, 2, 3, 1, 7],
  [8, 0, 6, 7, 8],
  [4, 0, 6, 2, 0],
  [3, 0, 6, 8, 1],
  [2, 0, 4, 5, 9],
]

// 对角线之和
var sum = 0
for (var i = 0; i < arr.length; i++) {
  // arr[i] 是一个数组
  for (var j = 0; j < arr[i].length; j++) {
    // arr[i][j]
    if (i === j || i + j === arr.length - 1) {
      sum += arr[i][j]
    }
  }
}

console.log(sum) // 44
