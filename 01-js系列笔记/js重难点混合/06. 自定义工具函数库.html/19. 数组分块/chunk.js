/**
 * 数组分组
 * @param {Array} arr 
 * @param {Number} size 里面的分组的数量，几个为一个小数组
 */
function chunk(arr, size = 1) {
  // 声明两个变量
  let result = [];
  let tmp = [];
  // 遍历
  arr.forEach(item => {
    // 判断tmp元素长度是否为0
    if (tmp.length === 0) {
      // 将tmp 压入到result中
      result.push(tmp);
    }
    // 将元素压入到临时数组tmp中
    tmp.push(item);
    // 判断
    if (tmp.length === size) {
      tmp = [];
    }
  });
  return result;
}