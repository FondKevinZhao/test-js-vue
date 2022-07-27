/**
 * 
 * @param {Array} arr 
 * @returns 
 */
function unique2(arr) {
  // 声明一个空数组
  const newArr = [];
  //  声明一个空对象：把数组当中的值作为下标存到obj当中
  const obj = {};
  // 遍历数组
  arr.forEach(item => {
    // 用obj[item]快速去判断数组当中是否存在这个元素，存在就为true，那就进不来if判断你，如果不存在那么就是undefined，就可以进入到这个if判断 
    if (obj[item] === undefined) {
      // 将item作为下标存储在obj中
      obj[item] = true;
      newArr.push(item);
    }
  })
  return newArr;
}