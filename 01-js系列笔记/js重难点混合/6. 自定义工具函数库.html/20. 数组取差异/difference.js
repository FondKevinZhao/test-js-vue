/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function difference(arr1, arr2 = []) {
  // 判断参数
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    return arr1.slice(); // 这句话的意思是返回arr1判断的返回值。slice()在这里表还是返回一个新数组
  }
  const result = arr1.filter(item => !arr2.includes(item));
  return result;
}