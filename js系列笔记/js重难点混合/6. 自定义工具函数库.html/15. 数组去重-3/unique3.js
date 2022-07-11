/**
 * 
 * @param {Array} arr 
 */
function unique3(arr) {
  // 写法一：
  /* // 将数组转化为集合 Set
  let set = new Set(arr); // 这是一个集合类型
  // console.log(set);
  // 把集合类型转化为数组
  let newArr = [...set];
  // console.log(newArr);
  return newArr; */

  // 写法二：
  return   [...new Set(arr)];
}