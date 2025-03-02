console.log(parseInt('1546', 2)) // 1
console.log(parseInt('546', 2)) // NaN
// 如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。
// 如果最高位无法转换，则直接返回 NaN。

// 上面代码中，对于二进制来说，1 是有意义的字符，5、4、6 都是无意义的字符，
// 所以第一行返回 1，第二行返回 NaN。