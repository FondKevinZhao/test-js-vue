function some(arr, callback) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 调用函数
    var result = callback(arr[i], i);
    // 如果有一个为真就直接return true
    if (result) {
      return true
    }
  }
  return false;
}