function bind(Fn, obj, ...args) {
  // 判断
  if (obj === undefined || obj === null) {
    obj = globalThis;
  }
  // 返回一个新的函数
  // 返回的这个函数的作用：调用目标函数Fn，并且改变内部的this指向
  return function (...args2) { // ...args2指：通过返回的新函数调用时传参的参数
    // 执行call函数
    // 为什么把...args放在前面，而...args2放在后面？因为bind在调用的时候，会把传递在bind身上的参数放在前面，而通过返回的函数传递的放在后面，这是js内部的机制
    return call(Fn, obj, ...args, ...args2);
  }
}