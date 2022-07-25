### insertAdjacentHTML 方法

[insertAdjacentHTML(swhere, stext)](https://blog.csdn.net/lizhao1226/article/details/5219142)：在指定的地方插入html标签语句

参数：

swhere: 指定插入html标签语句的地方，

stext:要插入的内容



有四种值可用：

1.     beforeBegin: 插入到标签开始前

2.     afterBegin:插入到标签开始标记之后

3.     beforeEnd:插入到标签结束标记前

4.     afterEnd:插入到标签结束标记后


### this 的绑定
this是在运行的时候绑定的，而不是在编译的时候
this的上下文取决于调用时的各种条件

### 面试题 - this问题

```js
function say(content){
      console.log('from' + this + ":hello" + content);
}

say.call('bobo', 'kangkang');
```

```js
function say(content){
      console.log('from:' + this.name + " hello:" + content);
}

var obj = {
  name: 'abc'
}
say.call(obj, 'kangkang');
```

### 面试题 - 函数内套函数的this问题

```js
var x = 10;
var obj = {
  x: 20,
  f: function () {
    console.log(this.x);
    var foo = function () {
      console.log(this.x);
    }
    foo(); // 主要是看函数的调用者，此时就等于：foo.call(window)
  }
}
obj.f()
```

```js
var x = 10;
var obj = {
  x: 20,
  f: function () {
    console.log('f: ',this.x);
    var foo = function () {
      console.log('foo: ',this.x);
      fn();
    }
    foo();
    function fn() {
      console.log('fn: ',this.x);
    }
  }
}
obj.f()
```

让下面的foo输出为20

```js
// 方法一：
var x = 10;
var obj = {
  x: 20,
  f: function () {
    console.log('f: ',this.x);
    var foo = function () {
      console.log('foo: ',this.x);
    }
    foo.call(obj); // 改变this指向
  }
}
obj.f()
```

```js
// 方法二：
var x = 10;
var obj = {
  x: 20,
  f: function () {
    console.log('f: ', this.x);
    var that = this; // 保存this
    var foo = function () {
      console.log('foo: ', that.x);
    }
    foo();
  }
}
obj.f();
```

```js
// 方法三：使用箭头函数
var x = 10;
var obj = {
  x: 20,
  f: function () {
    console.log('f: ', this.x);
    var foo = () => console.log('foo: ', this.x);
    foo();
  }
}
obj.f();
```

### 面试题 - 如果构造函数自己写了return

```js
function Car() {
  this.name = 'Lamborghini';
  return {
    name: 'Maserati'
  }
}

var myCar = new Car();
console.log(myCar.name);
```

```js
function Car() {
  this.name = 'Lamborghini';
  return 10
}

var myCar = new Car();
console.log(myCar);
```

### 面试题 - 或的判断

```js
var one = (false || {} || null);
var two = (null || false || '');
var three = ([] || 0 || true);
console.log(one, two, three);
```

### 面试题 - 原型题

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello1 = () => { // 箭头函数
    console.log(this.name);
  }

  sayHello2() { // 普通函数
    console.log(this.name);
  }
}

const p = new Person('邓哥');
p.sayHello1();
Person.prototype.sayHello1();
Person.prototype.sayHello1.call(p);
p.sayHello2();
Person.prototype.sayHello2();
Person.prototype.sayHello2.call(p);
```

上面的原型题目可以改写为：

```js
class Person {
  constructor(name) {
    this.name = name;
    this.sayHello1 = () => { // 这里的箭头函数的this就是实例对象
      console.log(this.name);
    }
  }
}
Person.prototype.sayHello2 = function () { 
  console.log(this.name); // 原型上的this指向的是原型对象，这个题的原型对象身上有name吗？
}

const p = new Person('邓哥');
p.sayHello1();
Person.prototype.sayHello1();
Person.prototype.sayHello1.call(p);
p.sayHello2();
Person.prototype.sayHello2();
Person.prototype.sayHello2.call(p);
```

### 面试题 - 对象的this问题

```js
var x = 10;
var obj = {
  x: 20,
  f: function () {
    console.log(this.x); 
  }
}
obj.f();
var fOut = obj.f;
fOut();
var obj2 = {
  x: 30,
  f: obj.f
}
obj2.f()
```



### 面试题 - 对象的this问题

看调用者，这一点非常重要

```js
var name = 222;
var a = {
  name: 111,
  say: function () {
    console.log(this.name); 
  }
}
var fun = a.say;
fun();
a.say();
var b = {
  name: 333,
  say: function (fun) {
    // a.say 的方法在这里执行
    // 也是方法直接执行，那么this指向的是window
    fun();
  }
}

b.say(a.say);
b.say = a.say;
b.say();
```

### 不在函数中调用的this指向

不在函数中调用的this还是指向的window

```js
var a = 100;
var obj = {a :1, b:this.a+1}
console.log(obj.b);
```

### 箭头函数的this

```js
const data = {
  name: 'bobo',
  fn: function () {
    console.log(this);
    const fn2 = () => {
      console.log(this.name);
    }
    fn2();
  }
}
data.fn();
```





















































































































































































































































































































































































































































































































































































