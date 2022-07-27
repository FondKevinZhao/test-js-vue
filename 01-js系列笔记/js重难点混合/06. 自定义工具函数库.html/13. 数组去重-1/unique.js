/**
 * 
 * @param {Array} arr 
 * @returns 
 */
function unique(arr) {
  // 声明一个空数组
  let newArr = [];
  // 遍历原数组
  arr.forEach(item => {
    // 检查新数组中是否包含这个元素
    // indexOf()：如果存在返回当前值在数组中的下标，如果不存在返回-1
    if (newArr.indexOf(item) === -1) {
      newArr.push(item);
    }
  })
  // 返回操作后的新数组
  return newArr;
}