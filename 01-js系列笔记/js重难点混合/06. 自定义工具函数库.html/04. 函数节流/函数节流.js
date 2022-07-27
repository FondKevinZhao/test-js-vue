function throttle(callback, wait) {
  // 定义开始时间
  let start = 0;
  // 返回结果是一个函数
  return function (e) {
    // 获取当前的时间戳
    let now = Date.now();
    // 判断
    if (now - start >= wait) { // 表明这个间隔时间大于了我们所设定的间隔时间
      // 如果满足条件则执行回调函数
      callback.call(this, e); // 这里的this指向事件源
      // 修改开始时间
      start = now;
    }
  }
}