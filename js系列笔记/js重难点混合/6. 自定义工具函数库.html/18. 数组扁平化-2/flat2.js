function flatten2(arr) {
  // 声明数组
  let result = [...arr];

  // 循环判断：判断这个数组当中还有没有数组，如果有就接着展开
  // 如果没有，就直接放到result中
  while (result.some(item => Array.isArray(item))) {
    result = [].concat(...result);
  }
  return result;
}