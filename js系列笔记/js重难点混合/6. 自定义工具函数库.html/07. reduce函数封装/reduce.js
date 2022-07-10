function reduce(arr, callback, initValue) {
  // 声明变量
  let result = initValue;
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    // 执行回调
    result = callback(result, arr[i]);
  }

  // 返回最终的结果
  return result;
}