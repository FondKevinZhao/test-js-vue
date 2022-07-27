/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
function findIndex(arr, callback) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 调用回调函数
    let res = callback(arr[i], i);
    // 判断
    if (res) {
      return i;
    }
  }
  return -1;
}