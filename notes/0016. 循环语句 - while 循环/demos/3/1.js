var i = 0

while (i < 100) {
  if (i === 10) break // 当 i 等于 10 的时候，跳出循环。
  console.log('i 当前为：' + i)
  i = i + 1
}

// 输出结果：
// i 当前为：0
// i 当前为：1
// i 当前为：2
// i 当前为：3
// i 当前为：4
// i 当前为：5
// i 当前为：6
// i 当前为：7
// i 当前为：8
// i 当前为：9