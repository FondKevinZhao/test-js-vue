/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
function every(arr, callback) {
  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    if (!res) {
      return false
    }
  }
  return true;
}