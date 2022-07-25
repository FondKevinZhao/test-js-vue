/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 */
function pull(arr, ...args) {
  // 声明一个空数组 -- 用来保存删掉的元素
  const result = [];
  // 遍历arr
  for (let i = 0; i < arr.length; i++) {
    // 判断当前元素是否存在于args数组中
    if (args.includes(arr[i])) {
      // 将当前元素的值存入到result中
      result.push(arr[i]);
      // 删除当前的元素
      arr.splice(i, 1);
      // 下标自减：为什么？
      /* 
        举例：[1, 3, 5, 3, 7]
          - 如果要从下标1开始删，删除1个，也就是把第一个3删除，那么后面的5会往前挪一位。
          - 这个时候，for循环会从下标2的位置开始，也就是说，会忽略这个5，这样子是不行的
      */
      i--;
    }
  };
  // 返回
  return result;
}