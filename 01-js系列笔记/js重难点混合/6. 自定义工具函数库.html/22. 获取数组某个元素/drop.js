/**
 * 
 * @param {Array} arr 
 * @param {Number} size 截取几个
 */
function drop(arr, size) {
  // 过滤原数组 产生新数组
  return arr.filter((value, index) => {
    // 判断
    return index >= size;
  })
}



/**
 * 
 * @param {Array} arr 
 * @param {Number} size 
 * @returns 
 */
function dropRight(arr, size) {
  // 过滤原数组 产生新数组
  return arr.filter((value, index) => {
    // 判断
    // return index <= arr.length - 1 - size; // 数组的最后一个减去size
    return index < arr.length - size; // 也可以这样写
  })
}