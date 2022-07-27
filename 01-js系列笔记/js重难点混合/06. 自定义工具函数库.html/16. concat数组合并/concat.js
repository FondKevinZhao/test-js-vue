/**
 * 
 * @param {Array} arr 
 * @param {Array} newArr 
 * @returns 
 */
// 这个方法只能拼接两个，遇到多个就不行
/* function concat(arr, newArr) {
  newArr1 = [];
  for (var i = 0; i < arr.length; i++) {
    newArr1.push(arr[i]);
  }
  for (var j = 0; j < newArr.length; j++) {
    newArr1.push(newArr[j]);
  }
  return newArr1;
} */



/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 * @returns 
 */
function concat(arr, ...args) {
  // 声明一个空数组
  const result = [...arr]; // [...arr] 这里展开的是你传进来的arr相关的所有参数
  // 遍历数组
  // console.log(args); // 这个args是一个大数组，里面可能包含有数组或者单个的参数，所以需要遍历并判断
  args.forEach(item => {
    // 判断item是否为数组
    if (Array.isArray(item)) {
      result.push(...item); // 如果args的某一项为数组，那么就把args的那一项展开，放到result数组中
    } else {
      // 如果args的大数组的某一项不是数组，那就直接放到result数组中
      result.push(item);
    }
  })
  return result;
}