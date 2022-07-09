// Fn 是执行的函数 
// obj是this的指向
// ...args是参数
function call(Fn, obj, ...args) {
  // 判断
  if(obj === undefined || obj === null) {
    // globalThis 是ES11推出来的新的特性，用它来指向全局对象
    // 全局对象：在浏览器中是window，在nodejs中是global
    obj = globalThis; // 全局对象
  }
  // 为obj添加临时的方法
  obj.temp = Fn;
  // 调用temp方法
  let result = obj.temp(...args); // 外面传进来的函数执行是在这里执行的，所以外面控制台可以看到：{c: 521, temp: ƒ}
  // 删除temp方法
  delete obj.temp;
  // 返回执行结果
  return result;
}