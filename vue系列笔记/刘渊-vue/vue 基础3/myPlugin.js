(function (w) {
  // 一个插件最终是一个对象
  let MyPlugin = {};
  // Vue 当中规定一个插件必须要有一个install方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或 property：给Vue添加了一个静态方法
    Vue.myGlobalMethod = function () {
      console.log('全局方法被调用了')
    }

    // 2. 添加全局资源：给Vue添加了一个全局指令
    Vue.directive('upper', function(el, bindings) {
      el.textContent = bindings.value.toUpperCase()
    })

    // 3. 注入组件选项
    // Vue.mixin({
    //   created: function () {
    //     // 逻辑...
    //   }
    // })

    // 4. 添加实例方法：所有的vm都可以调用这个方法
    Vue.prototype.$myMethod = function (methodOptions) {
      // 逻辑...
      console.log('实例方法被调用了');
    }
  }
  // 将插件挂载到window身上，暴露出去
  w.MyPlugin = MyPlugin;
})(window)