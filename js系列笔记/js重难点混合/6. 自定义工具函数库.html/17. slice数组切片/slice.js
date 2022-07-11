/**
 * 
 * @param {Array} arr 
 * @param {Number} begin 
 * @param {Number} end 
 */
function slice(arr, begin, end) {
  // 若arr数组长度为0
  if (arr.length === 0) {
    return [];
  }

  // 判断begin
  begin = begin || 0; // 如果没传，默认值为0
  if (begin >= arr.length) {
    return [];
  }

  // 判断end
  end = end || arr.length;
  if (end < begin) {
    end = arr.length;
  }

  // 声明一个空数组
  const result = [];
  // 遍历数组
  for (let i = 0; i < arr.length; i++) {
    if (i >= begin && i < end) {
      // 将下标对应的元素压入数组
      result.push(arr[i]);
    }
  }
  return result;
}