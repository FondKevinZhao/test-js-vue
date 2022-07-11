/**
 * 
 * @param {Array} arr 
 */
function flatten(arr) {
  // 声明一个空数组：接收最后的结果
  let result = [];
  // 遍历数组
  arr.forEach(item => {
    // 判断当前项是否为数组
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result = result.concat(item);
    }
  })
  // 返回结果
  return result;
}