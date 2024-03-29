### 一、JavaScript简介
  1. JavaScript 简介(是什么)

     谁？在哪里？什么时候？用多长时间开发的？是一门什么样的语言？

     布兰登·艾奇，在美国，1995年，用了10天开发出来的。
     JavaScript是一门动态的、弱类型的、解释型的脚本语言。

     - 动态：只有在执行的时候，才能确定数据类型。
     - 弱类型：变量数据的类型不是确定的，可以随意的进行改变。
     - 编译性：其他语言。意思是程序在执行的时候，要先把代码编译成计算机认识的语言，然后才能执行。
     - 解释型：相对编译性来说，编译型计算机在执行之前需要把程序进行编译，完事之后才执行，而解释型，不需要编译，执行的时候，一行一行去解释执行。
     - 脚本语言：一般只要是脚本语言，都代表可以嵌在其他的语言当中进行执行。(js在Java、PHP、Python等语言中都可以使用)。

      html、css、js的分工：
       - html：负责结构
       - css：负责样式
       - js：负责行为(动态效果)

     起初叫什么？后来叫什么？

     - 起初叫：LiveScript
     - 后来叫：JavaScript。因为在95年Sun公司的Java很火。为了能够让更多人知道Livescript，就改名为了JavaScript，借助Java的名字活了一把。其实这两种语言没有啥关系。就像老婆和老婆饼，周杰和周杰伦。



  2. 为什么要有JavaScript。

     开始能干啥？

     - 负责表单验证(仅仅是负责表单验证)
     - 如果没有js，那么我们网页的表单验证需要通过网络传输数据去服务器进行验证，占用带宽资源验证，并且用户体验效果不好。

     现在能干啥？
       - 表单验证
       - 用户交互
       - 游戏(主要是小游戏，大型游戏不好写。)
       - 后端开发

  3. JavaScript的组成部分

     ECMAScript：负责js的语法部分

     - ECMA：欧洲计算机制造者协会

     DOM：Document Object Model 文档对象模型(操作元素)

     - W3C组织推荐的处理可扩展置标语言的标准编程接口。

     BOM：Browser Object Model 浏览器对象模型

  4. js的体验，第一个js程序，js的语句特点

     - alert函数：以弹出框的形式输出内容。

     - console.log函数：以日志的形式在控制台输出内容。

     - document.write函数：把内容作为网页的内容进行展示。

     - console.dir函数：暂时不讲。

  5. js的三种书写位置及优缺点

       1. 行内式/内联式：`<div id="box" onclick="alert('弹出来了呀')">点我弹出对话框</div>`。不推荐使用。

       2. 内嵌式：在html文件中内嵌script标签，在script内写js代码。讲课时使用。

       3. 外链式(里面不能写其他代码，写了也不会执行)：在html中使用script标签引入外部的js文件。写项目时使用。

          

​		

### 二、变量及作用

1. 什么是变量，什么是常量

   - 变量：可以变化的量。**变量的本质是一个容器。**
   - 常量：不可以变化的量。

2. 为什么要有变量？

3. 什么是程序，什么是进程？

   程序：代码的集合，一般指的是文件，程序是静态的。

   进程：运行的程序，就被称作进程，进程是动态的。

   程序其实就是一个输入 ---》运算 ---》输出的过程

   那么我们要对一个数据进行运算，然后进行输出，这个数据就需要有一个东西去保存，这个东西就是我们所说的变量，本质上是一个容器，这个容器就是内存空间。

4. 变量怎么去玩？

   1. 定义变量，先定义后使用，变量的初始化(var和不写的区别)，变量的本质是一个容器。

   2. 变量的命名规范(组成、大驼峰、小驼峰、下划线)。

      **变量的名字组成：**

      - 数字、字母、下划线以及`$`组成。
      - 不能以数字开头。
      - 不能使用关键字或者保留字。
      - 变量名要见名知义。

      大驼峰：变量名所有的单词首字母大写。如：`MyAge`

      小驼峰：变量名第一个单词首字母小写，其它的大小。如：`myAge`

      下划线：单词和单词之间用下划线连接。如：`my_age`

   3. 关键字和保留字：

      JavaScript的关键字：

      > break、case、catch、continue、default、delete、do、else、finally、for、function、if、in、instanceof、new、return、switch、this、throw、try、typeof、var、void、while、with

      

      JavaScript的保留字：

      > boolean、byte、char、class、const、debugger、double、enum、export、extends、fimal、float、goto、implements、import、int、interface、long、mative、package、private、protected、public、short、static、super、synchronized、throws、transient、volatile

      

### 三、数据类型

1. 数据类型(存储的数据的类型)：

   基本(简单)数据类型和对象(复杂、引用)数据类型

   - 基本数据类型(值类型)
   - 对象数据类型(对象类型)

2. 基本使用场景：

   - 数值类型：整数，小数，科学计数法，2进制(0b)，8进制(0/0o)，16进制(0x)，NaN。
   - 字符串：单引号或双引号，包含空字符串 和 空白字符串。
   - 布尔：true 或者 false。
   - undefined：定义的变量没有赋值。
   - null：定义的变量赋值为null(一般是对对象进行初始化使用或者是删除一个对象的时候用到)。

3. 数据类型的判断：

   - typeof 判断：typeof后面只要是有值的东西都可以判断

     - 可以对变量判断：`var a = 10; console.log(typeof a);`
     - 可以对值判断：`console.log(typeof 10);`

   - typeof的结果是什么类型？

     返回的是一个小写的字符串类型

   - typeof的判断基本数据类型的特殊情况

     null

### 四、运算符和表达式

什么是运算符/操作符？什么是表达式？表达式是有值的(重要程度：★★★★★)。

运算符：参与运算的符号。

表达式：由变量、常量和运算符组成的式子。

1. 算术：`+ - * / % ++ --`

   **取余的作用：**

   - 可以拿到余数。
   - 可以拿到一个范围。比如：任何一个数跟18取余，最后的余数肯定落到0-17之间。

   **++ -- 作用及注意事项：**

   - 自增自减运算符只能和变量组成表达式。
   - ++在前，先++后赋值。
   - ++在后，先赋值后++。

2. 赋值：`= += -= *= /= %=`

   把等号(=)右边的值赋值给等号(=)左边的变量。等号(=)左边一定是变量。

   ```js
   var a = 1;
   
   var b = 2;
   
   a = a + b; // a+b组成了表达式，表达式是有值的
   ```

   复合赋值运算符：`+= -= *= /= %=`

   ```js
   var a = 5;
   a += 6; // a = a + 6;
   ```

   

3. 比较：`> < >= <= == != === !==`

   `==`：判断的是值是否一致。

   `===`：判断的是类型和值是否都一致，都一致才会为true。

4. 逻辑：`&& || !`

   逻辑运算符通常用在多个条件表达式的连接。

   1. &&：一假则假
   2. ||：一真则真
   3. !：真就是假，假就是真。这个`非!`无论放在什么样的东西之前，最终的结果都是布尔值。

   短路运算：

   **&&：**如果用在两个值之间，本质上其实是这个过程：

   - 先判断与(&&)之前是否为真，如果为真，那么就取后面的值，赋值给表达式

   - 如果前面的值为假，那么就直接取前面的值，赋值给表达式

   

     **||：**如果用在两个值之间，本质上其实是这个过程：

   - 先判断或(||)之前是否为真，如果为真，那么就取前面的值，赋值给表达式
   - 如果前面的值为假，那么就直接取后面的值，赋值给表达式

   通常情况下，`&&`，`||`，`!` 都是和条件运算表达式在一起使用

5. 三目运算符(三元运算符)：`? :`

   `a ? b : c` a为真执行b，并把执行结果给到整个表达式。a 为假执行c，并把执行结果给到整个表达式。

### 五、数据类型转换

1. 数据类型强制转换(显示类型转换)
   - Number()：强制将一个其他类型数据转化为数字类型，转不了就是NaN(Not a Number)。

     **字符串转Number()**通常情况下是用来转字符串的：

     - 如果字符串整体来看是一个数字，那么就转化为整个数字。
     - 如果字符串整体来看不是一个数字，那么就转化为NaN。
     - 如果字符串是一个特殊的空字符串，或者空白字符串，那么转化为0。

     **布尔 转 Number() ：**

     - true会转换为1。
     - false会转换为0。

     **undefined 转 Number()：**undefined会转换为NaN。

     **null 转 Number()：**null会转换为0。

     **对象 转 Number()：**对象会转换为NaN。

     

   - String()：强制将一个其他类型数据转化为字符串类型。

     转化字符串没有什么特殊，只要给我东西，那么就会把这个东西原样变为字符串输出，除了object类型。

     **数字类型 转 String()字符串类型 ：**原样变为字符串

     **布尔类型 转 String()字符串类型 ：**原样变为字符串的true或false

     **undefined类型 转 String()字符串类型 ：**原样变为字符串的undefined

     **null类型 转 String()字符串类型 ：**原样变为字符串的null

     **object类型 转 String()字符串类型 ：**[object Object]

   - Boolean()：强制将一个其他类型数据转化为boolean类型

     **数字类型 转 Boolean() 类型：**除了0是false，其他数字都为true

     **字符串 转 Boolean() 类型：**除了空字符串是false，其他的都是true

     **undefined 转 Boolean() 类型：**undefined 转 布尔 是false

     **null 转 Boolean() 类型：**null 转 布尔 是false

     **object类型 转 Boolean() 类型：**对象 转 布尔 是 true

     

   怎么快速将一个字符串`‘23’`转化为数字23？

   ```js
   // 从静哥的笔记中搬过来的
   // 题目：快速将字符串转换为数值
   var str = '99';
   // 想办法转换成数值型。
   // 方法一：
   console.log(Number(str)); // 99
   
   // 方法二：
   console.log(parseInt(str)); // 99
   
   // 方法三：
   console.log(parseFloat(str)); // 99
   
   // 方法四：
   console.log(str - 0); // 99 // str 会调用Number()转换为99。
   
   // 方法五：
   console.log(+str); // 99
   ```

   

2. 数据类型隐式转换：计算机自动转换的

   各种类型在适当的场合会发生隐式转换

   主要是运算和条件判断过程中会发生隐式转换

   `console.log(5 + false);`

3. 数据类型手动转换(其实就是在字符串当中提取数字)

   `parseInt()`：从字符串中提取整数，这个字符串必须以数字开头，否则NaN。

   `parseFloat()`：从字符串中提取小数，这个字符串必须以数字开头，否则NaN。

### 六、基本数据运算(表达式的值)

#### 同种数据类型运算和比较

   **数字和数字：**数字之间进行运算的时候该怎么算就怎么算

   - 小数运算的时候不准

     ```js
     console.log(0.1 + 0.2); // 0.30000000000000004
     ```

     解决方案：`console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3`

   - 数字的最大值和最小值

     ```js
     console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
     console.log(Number.MIN_VALUE); // 5e-324
     ```

     

   - 0/0，0/1，1/0 分别是多少？

     ```js
     console.log('0 / 0', 0 / 0); // NaN
     console.log('0 / 1', 0 / 1); // 0
     console.log('1 / 0', 1 / 0); // Infinity
     ```

   - 比较

   **字符串和字符串：**字符串有数字型的字符串和不是数字型的字符串，还有空字符串。只有加号+有意义，其他都是NaN，比较时是false。

   ​	`var a = 'i love you';`	`var b = 'zhao li ying';`

   - `+：` `console.log(a + b);`
   - `-：` `console.log(a - b);`
   - `*：` `console.log(a * b);`
   - `/：` `console.log(a / b);`
   - `%：` `console.log(a % b);`
   - `比较：` `console.log(a > b); // false // 按照字母的大小来进行比较`
   - 空字符串(空字符串转数字为0)：`var a = '';`	`var b = '';`
     - `+：` `console.log(a + b); // 空 `
     - `-：` `console.log(a - b); // 0 `
     - `*：` `console.log(a * b); // 0`
     - `/：` `console.log(a / b); // NaN`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // false`

   **boolean和boolean：**

   ​	`var a = true; var b = true`

   - `+：` `console.log(a + b); // 2`
   - `-：` `console.log(a - b); // 0`
   - `*：` `console.log(a * b); // 1`
   - `/：` `console.log(a / b); // 1`
   - `%：` `console.log(a % b); // 0`
   - `比较(转数字)：` `console.log(a > b); // false`

   **undefined和undefined：**

   - `+：` `console.log(a + b); // NaN`
   - `-：` `console.log(a - b); // NaN`
   - `*：` `console.log(a * b); // NaN`
   - `/：` `console.log(a / b); // NaN `
   - `%：` `console.log(a % b); // NaN`
   - `比较(转数字)：` `console.log(a > b); // false`

   **null和null：**

   - `+：` `console.log(a + b); // 0`
   - `-：` `console.log(a - b); // 0`
   - `*：` `console.log(a * b); // 0`
   - `/` `console.log(a / b); // NaN`
   - `%：` `console.log(a % b); // NaN`
   - `比较(转数字)：` `console.log(a > b); // false`

#### 不同类型转换

**数字和其他类型：**

- 数字和字符串：`var a = 10; var b = '2';`
     - `+：` `console.log(a + b); // '102'`
     - `-：` `console.log(a - b); // 8`
     - `*：` `console.log(a * b); // 20`
     - `/：` `console.log(a / b); // 5`
     - `%：` `console.log(a % b); // 0`
     - `比较(转数字)：` `console.log(a > b); // true`
- 数字和boolean：`var a = 10; var b = true;`
     - `+：` `console.log(a + b); // 11`
     - `-：` `console.log(a - b); // 9`
     - `*：` `console.log(a * b); // 10`
     - `/：` `console.log(a / b); // 10`
     - `%：` `console.log(a % b); // 0`
     - `比较(转数字)：` `console.log(a > b); // true`
- 数字和undefined：`var a = 10; var b = undefined;`
     - `+：` `console.log(a + b); // NaN`
     - `-：` `console.log(a - b); // NaN`
     - `*：` `console.log(a * b); // NaN`
     - `/：` `console.log(a / b); // NaN`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // false`
- 数字和null：`var a = 10; var b = null;`
     - `+：` `console.log(a + b); // 10`
     - `-：` `console.log(a - b); // 10`
     - `*：` `console.log(a * b); // 0`
     - `/：` `console.log(a / b); // Infinity`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // true`

**字符串和其他类型：**

- 字符串和boolean：`var a = 'abc'; var b = true;`
     - `+：` `console.log(a + b); // 'abctrue' // 有字符串那么true就不会再转换为数字`
     - `-：` `console.log(a - b); // NaN`
     - `*：` `console.log(a * b); // NaN`
     - `/：` `console.log(a / b); // NaN`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // false`
     
     `var a = '123'; var b = true; // 字符串是个数字`
     
     - `+：` `console.log(a + b); // '123true'`
     - `-：` `console.log(a - b); // 122`
     - `*：` `console.log(a * b); // 123`
     - `/：` `console.log(a / b); // 123`
     - `%：` `console.log(a % b); // 0`
     - `比较(转数字)：` `console.log(a > b); // true`
     
- 字符串和undefined：`var a = 'abc'; var b = undefined;`
     - `+：` `console.log(a + b); // 'abcundefined'`
     - `-：` `console.log(a - b); // NaN`
     - `*：` `console.log(a * b); // NaN`
     - `/：` `console.log(a / b); // NaN`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // false`
     
- 字符串和null：`var a = 'abc'; var b = null;`
     - `+：` `console.log(a + b); // 'abcnull'`
     - `-：` `console.log(a - b); // NaN`
     - `*：` `console.log(a * b); // NaN`
     - `/：` `console.log(a / b); // NaN`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // false`
     
     `var a = '123'; var b = null; // 字符串是个数字`
     
     - `+：` `console.log(a + b); // '123null'`
     - `-：` `console.log(a - b); // 123`
     - `*：` `console.log(a * b); // 0`
     - `/：` `console.log(a / b); // Infinity`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // true`

**布尔和其他类型：**

- 布尔和undefined：`var a = true; var b = undefined;`
     - `+：` `console.log(a + b); // NaN`
     - `-：` `console.log(a - b); // NaN`
     - `*：` `console.log(a * b); // NaN`
     - `/：` `console.log(a / b); // NaN`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // false`
- 布尔和null：`var a = true; var b = null;`
     - `+：` `console.log(a + b); // 1`
     - `-：` `console.log(a - b); // 1`
     - `*：` `console.log(a * b); // 0`
     - `/：` `console.log(a / b); // Infinity`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // true`

**undefined和null：**

- `var a = undefined; var b = null;`
     - `+：` `console.log(a + b); // NaN`
     - `-：` `console.log(a - b); // NaN`
     - `*：` `console.log(a * b); // NaN`
     - `/：` `console.log(a / b); // NaN`
     - `%：` `console.log(a % b); // NaN`
     - `比较(转数字)：` `console.log(a > b); // false`

#### 特殊情况(主要是null)

1. 空字符串和null不等

   ```js
   var a = '';
   var b = null;
   console.log(a == b); // false 
   console.log(Number(a) == Number(b)); // true
   ```

   

2. false 和 null 不等

   ```js
   var a = false;
   var b = null;
   console.log(a == b); // false 
   console.log(Number(a) == Number(b)); // true
   ```

   

3. 0 和 null 不等

   ```js
   var a = 0;
   var b = null;
   console.log(a == b); // false 
   console.log(Number(a) == Number(b)); // true
   ```

   

4. false 和空字符串相等

   ```js
   var a = false;
   var b = '';
   console.log(a == b); // true 
   console.log(Number(a) == Number(b)); // true
   ```

   

5. undefined 和 null 相等

   ```js
   var a = undefined;
   var b = null;
   console.log(a == b); // true 
   console.log(Number(a) == Number(b)); // false
   ```

   

#### 在其余的情况下

只要是不同的基本数据类型进行运算和比较：

第一步：先看是不是`加+`。如果是`加+`，看没有字符串，如果有字符串，那就是拼接字符串。

第二步：再看是不是比较，如果是比较看是不是两边都是字符串，如果是，比较的是字符串的Unicode码。

最后：全部转数字。



### 七、流程控制语句

#### 语句的结构分类

1. 顺序结构：平常所写的，代码从上到下一行一行执行。
2. 分支结构：if判断语句等
3. 循环结构：for循环，while循环

**一、if判断**

1. 单分支

   ```js
   if(一般都是一个表达式，但是最终只要有值就行，并且这个值最终会转化为布尔值){
       // 代码块
   }
   ```

   

2. 双分支：三元表达式、if-else

   ```js
   if(一般都是一个表达式，但是最终只要有值就行，并且这个值最终会转化为布尔值){
       // 代码块
   } else {
       // 代码块
   }
   ```

   

3. 多分支

   多分支语句是把一件事分成多种情况去考虑，每一种情况都要去处理。

   ```js
   if(){
       // 代码块
   } else if () {
       // 代码块
   } else if() {
       // 代码块
   } else {
       // 代码块
   }
   ```

   

4. 分支嵌套：if里面再套if

   ```js
   if(){
       if(){}else {}
   } else if(){
       if(){}else {}
   } else {}
   ```

   

**二、switch-case分支语句**

其实就是if多分支语句的变种，为了代码可读性更好一些。

switch 语句执行过程：先求出小括号当中的值，接着会拿着这个值从上到下和所有的标号后面的值进行对比，如果对比成功，就执行。

case 只是一个标号，它不是我们的代码语句，只是用来做对比用的。

真正的代码是switch当中的值 和 case 标号后面的值相等，那么就会执行响应的代码块。

break 跳出switch 循环语句。

```js
switch(n) { // 这个n和case后面的值要完全相等才能生效，也就是全等
    case 1:
        console.log('111');
        break;
    case 2:
        console.log('222');
        break;
    default:
        console.log('333');
        break; // default后的break可以省略
}
```



**三、for循环**

1. 循环的意义(为什么要循环)

   ```js
   for(初始化表达式; 条件表达式; 自增自减表达式) {
       循环体(代码块)
   }
   ```

   **for循环执行过程：**

   第一次循环

   - 首先执行初始化表达式
   - 接着执行条件表达式
   - 然后执行循环体
   - 最后执行自增自减表达式

   非第一次循环

   - 执行条件表达式
   - 执行循环体
   - 执行自增自减表达式

   **一定注意：**

   - for循环初始化表达式只是在第一次循环的时候执行，后边的循环全部都不执行了。
   - for循环当中的循环变量 i/j 有两个作用：1. 控制着循环的次数。2. 变量同时也是有值的。

2. 循环的语法

3. 案例练习

   - 打印1-100之间的的数
   - 打印1-100之间的偶数
   - 计算1-100之间的和
   - 计算1-100之间所有偶数的和

4. 死循环

   ```js
   // for循环的死循环
   for(;true;) {
     console.log('a');
   }
   ```

   

**四、嵌套循环(循环里面最难的)**

1. 嵌套循环的定义：在一个循环当中又会出现另外一个循环。
2. 口诀：
   - 外层循环控制行，内层循环控制列
   - 外层循环走一次，内层循环全部走完
3. 案例
   - 打印矩形
   - 打印三角形
   - 打印乘法口诀表

**五、while和do-while循环**

while循环：

```js
var i = 1;
while(i < 100) {
    console.log(i);
    i++;
}
```

while循环的死循环：`while(true){}`

do-while循环：

```js
var i = 1;
do {
    console.log(i);
    i++
} while(i < 100);
```

> do-while会先执行一次循环体中的代码，然后再判断while后面的条件表达式的条件是否为真，如果条件为真就会继续执行循环体的内容，否则退出do-while循环。

### 八、break 和 continue 关键字

break 两个作用：1. 跳出switch语句。2. 跳出循环。

注意：break 在循环当中，只能跳出离它最近的那一层循环。如果是多层循环，要注意这个问题。

continue：结束当前循环，continue 以下的代码不会执行了，从下一次开始继续。也就是跳出当前循环，执行下一次循环。

### 九、数组

1. 数组的概念、作用、定义
   - 数组：是一个具有相同类型或者不同类型的数据的有序集合。
   - 为什么使用数组：因为我们想要一次性拿到很多个数据，如果没有数组，就得定义很多的变量去存储。
   - 如何定义数组：`var arr = []`
   
2. 数组的 length(长度)，index(索引，下标)
   - 数组的 length：只要定义一个数组，数组里面就会有一个默认的属性叫length，它代表着数组的长度。
   - index，通常通过数组中的索引来获取数组中的数据。
   
3. 数组(数组的不同个位置：增、删、改、查)
   - 在数组的末尾加一个数
   - 在数组的头部加一个数
   - 在数组的中间加一个数
   
   改和查知道了下标怎么都可以玩，但是不知道下标的情况下，我们需要去遍历一下数组。

二维数组(了解)



### 十、函数

#### 函数基本使用

1. 什么是函数(函数的概念)？具有某种特定功能的代码块

2. 为什么要有函数(函数的作用)？
   - 函数可以解决代码复用问题(最大的作用)。
   - 函数可以把整个项目模块化。
3. 函数定义(字面量定义、表达式定义，先定义后使用)

**函数定义或者调用都要考虑函数的三要素：功能、参数、返回值**

- 功能：一般说的就是函数能做什么，通常情况下函数名就代表着函数的功能。也告诉我们，定义的函数的名字要见名知义。
- 参数：

  1. 函数的小括号当中，写的是参数，函数定义的参数，我们被称作形参(形式参数，可有可无)。形参写出来就相当于在函数内部var了一个变量。

  2. 函数调用的时候，小括号里面也写的是参数，这些参数我们称作为实参(实际参数)。

  3. 函数调用的实参本质上是在给函数定义的形参，进行赋值。
- 返回值：每一个函数都会有返回值，有的函数返回值比较明确，写了return。但是有的函数没有写return，并不是代表这个函数没有返回值，而是省略了return，实际上返回值是undefined。
- 函数调用也被称为函数调用表达式，既然函数调用是一个表达式，那么函数调用就是有值的。返回值就是函数调用表达式的值。
- 函数传参：分为传基本数据类型和对象数据类型，传基本类型和对象类型不一样
  - 基本数据类型传进去后，函数外和函数内操作的不是同一个值。所以，当传递基本数据类型的时候，函数内部运算后的结果，我们需要返回。
  - 如果传递的是对象类型(如：数组)，那么函数内部和外部操作的同一个数据，因此，函数内部对数组所有的操作，就相当于操作函数外部的一样，所以，运算完之后，不需要返回外部一样看到发生了变化。



#### 函数的分类

无参：无传递进来的参数。有参：有传递进来的参数。

1. 无参无返回值
2. 有参无返回值
3. 无参有返回值
4. 有参有返回值

#### 作用域和作用域链

1. 作用域概念、定义、作用

   - 概念、定义：作用域说的是变量起作用的区域或者范围。
   - 作用域的作用：变量在各自的作用域当中起作用。

2. 局部变量和全局变量

   - 局部变量：在局部作用域当中的变量(函数当中定义的变量)
   - 全局变量：在全局作用域当中的变量(函数外部定义的变量)

   局部变量和全局变量，没有任何关系。

   全局变量在哪儿都可以使用，而局部变量只能在自己局部作用域当中使用。

3. 作用域分类(全局，局部， 块级)，作用域链

   在es5当中没有块级作用域，只有全局和局部(函数内部)。

   ```js
   // 全局作用域
   var a = 2;
   if(a > 1) {
       var c = 100;
   }
   console.log(c); // 100
   ```

   

   ```js
   // 块级作用域
   var a = 2;
   if(a > 1) {
     let c = 100; // let + {} 形成块级作用域
   }
   console.log(c); // 报错
   ```

   

   **全局作用域和局部作用域当中定义变量的坑：**

   - 当我们定义变量的时候，都会加一个var，但是也有不加var的情况。
   - 如果是在全局：没有定义过的变量，不加var，那么必须给这个变量赋值，而且相当于给这个变量加var，是一个地地道道的全局变量。
   - 如果是在局部：没有定义过的变量(没有参数是它，也没有加var)，此时定义这个变量不加var，首先要看外部全局是否定义过这个变量，如果全局定义过，那么这个变量就不是在初始化，而是在操作全局变量。如果没有定义过，相当于在全局加var定义了这个变量。

   **作用域链：说的是查找变量的过程。**

   作用域链查找顺序：

   - 变量在查找的时候，首先从自己的作用域当中去查找，如果没有，往上一级作用域当中去查找，一直查找到函数外部的全局作用域，只要找到，立即停止往上找，直接输出。
   - 如果没有找到一直往上查。如果最后查找到函数外部的全局都没有，报错。

   作用域链规律：外部变量永远看不到内部变量，内部变量永远可以看到外部变量。

   

   ```js
   var num = 0;
   function f1() {
     var num = 1;
     function f2() {
       var num = 2;
       function f3() {
         var num = 3;
         function f4() {
           var num = 4;
           console.log(num);
         };
         f4();
       };
       f3();
     };
     f2();
   };
   f1();
   ```

   栈结构(罐子)：先进后出

   堆结构(水管)：先进先出

#### 预解析

预解释、声明提升、变量提升

1. 预解析演示
   - 变量：带var和不带var。
   
     预解析只会解析带var的变量，如果不带var，不进行预解析。
   
   - 函数：字面量和表达式函数关系。
   
     1. 如果是字面量的方式函数整体会提升
   
        ```js
        // 函数声明/函数字面量方式
        function f1() {}
        ```
   
        
   
     2. 如果是表达式的方式，只会提升var f1，不会提升函数表达式
   
        ```js
        // 函数表达式的方式
        var f1 = function(){}
        ```
   
     
   
2. 预解析效果

   - 全局：全局当中所有带var的变量，以及使用字面量定义的函数，都要提升到全局的最上方。

   - 函数：函数当中所有带var的变量，以及使用字面量定义的函数，都要提升到函数局部环境的最上方。
   
3. 预解析优先级：函数的优先级比变量高，优先解析

   1. 先去解析函数，函数如果有同名会发生覆盖，下面的覆盖上面的

   2. 在去解析var的变量，如果变量有同名，或者变量跟函数名同名，真正的情况是忽略变量名。

   3. 函数和变量名同名情况下，变量提升了，直接打印会忽略变量名，也就是打印函数的内容。如果是变量赋值后再打印，那么变量就会起作用。

      ```js
      a = 5;
      alert(a);
      var a = '我是变量';
      function a(){
        alert('我是函数');
      };
      alert(a);
      function a() {
        console.log('我是函数2');
      }
      var a = '哈哈';
      alert(a);
      ```

      ```js
      // 变量提升后的样子
      function a(){
        alert('我是函数');
      };
      function a() {
        console.log('我是函数2');
      }
      var a
      var a // 因为变量名和函数名重名，所以变量名被忽略
      a = 5; // 变量重新赋值。如果这里没有赋值，那么下面的alert就是‘我是函数2的整个函数’
      alert(a); // 变量起作用
      a = '我是变量';
      
      alert(a);
      
      a = '哈哈';
      alert(a);
      ```

      

   4. var的优先级比函数高(我自己总结)，按照这一条做题目没啥问题：

      ```js
      alert(a);
      var a = '我是变量';
      function a(){
        alert('我是函数');
      };
      alert(a);
      function a() {
        console.log('我是函数2');
      }
      var a = '哈哈';
      alert(a);
      ```



#### IIFE 匿名函数自调用

IIFE: Immediately Invoked Function Expression 立即调用函数表达式(匿名函数自调用)

```js
(function(){})();

(function(){}());
```

匿名函数自调用的特点：

1. 定义的时候就直接调用了，不会发生预解析。但是匿名函数内部还是会有预解析。
2. 匿名函数只会执行一次。

匿名函数自调用的作用：通常用来做一些项目的初始化(移动端适配。jQuery，Vue等框架中)。

匿名函数自调用通常可以做这些事：

1. 封装代码实现，不把代码暴露出去。

2. 可以防止外部的命名空间被污染。

   

#### arguments

Arguments 函数实参伪数组

arguments中包含了所有传过来的实参。如果形参是3个，实参是2个，那么arguments.length 是2个。

arguments的作用：通常用来做判断，通过`arguments.length`来实现。如：如果你传进来三个参数，这个函数就是求和。如果你传进来两个参数，这个函数就是求差。



#### 回调函数

函数是可以作为参数传递的(一般都是回调函数)

回调函数：

- 函数是我定义的
- 我没有调用
- 函数最终执行了

回调函数一般出现在：

1. 事件
2. 定时器
3. Ajax请求
4. 生命周期回调函数
4. promise成功/失败的回调



### 十一、对象

1. 对象的概念

   在js当中，可以说一切皆对象。

   对象的概念：无序的键值对的集合。

2. 对象的创建方法

   - 字面量创建
   - New Object 创建
   - 工厂函数模式

3. 对象的操作及遍历

   - 读：读就是‘查’。有`点语法.`和`中括号[]`
   - 写：写就是‘增和改’
   - 注意点：`点语法.`和`中括号[]`还有变量
   - 遍历：for in循环遍历对象 `for(var key in obj){}`
     - 如果在遍历对象的时候取值，只能使用`中括号[]`的形式，因为key是一个变量。
     - 如果写成`obj.key`拿到的是undefined，key被认为是对象里面的属性。
     - `obj[key] key`被解析为变量，使用变量的值进行替换。

### 十二、构造函数创建特定实例对象

1. 构造函数的基本概念、使用、作用

   - 构造函数的概念：本质上也是一个函数，只不过通常我们把构造函数的名字写成大驼峰。在js当中没有类的概念(ECMA5)，构造函数可以理解为类。
   - 构造函数的使用：用法和普通的函数用法是一样的，只不过它比普通函数多了一种用法，而这种用法就是`new`。

   **注：**函数是对象，当函数操作其属性或者方法时函数作为对象使用。

2. 对this的讲解

   不同场合this的指向不同

   window对象简介：浏览器窗口对象，代码执行的时候所有的一切都是包含在window对象下的。

   window下的函数通常称为函数。对象里面的函数通常称为方法。

   

3. new关键字实例化对象

   1. 开辟内存空间
   2. this指向该内存
   3. 执行函数
   4. 生成对象实例

4. 原型对象和原型链

   - 原型对象
     1. 什么是原型对象？
     
        任何的函数对象在定义的时候，都会伴随着一个原型对象出现，原型对象默认是Object的实例对象
     
     2. 原型对象的作用：解决数据共享，节省内存空间
     
   - 原型链：对象在查找属性或者方法的过程。通过`__proto__`
   
     - 对象在调用属性或者方法的时候，首先会从自身对象空间查找，如果找到就直接用了。
     - 如果没有找到，然后去自己的原型对象空间去找(自己的构造函数的原型对象)，如果找到就用。
     - 如果没有找到，然后去自己的原型对象的原型对象空间当中去找(自己的构造函数的原型对象的构造函数的原型对象当中去找)，如果找到就用，如果找不到继续向上查找，直到找到Object的原型对象位置，找到就用，找不到的话，如果是属性就返回undefined，如果是方法就返回报错：`xxx is not a function`。
   
   

#### call 和 apply 

call 和 apply 可以让一个对象使用另外一个对象的方法。

让一个实例对象去调用window的方法(也就是我们所说的函数)。

`函数或者方法.call(对象，函数的参数1， 函数的参数2);`

`函数或者方法.apply(对象，[函数的参数]);`

#### instanceof 和 typeof

- typeof 在判断基本数据类型当中的数字、字符串、布尔、undefined以及函数的时候可以派上用场，但是当我们使用typeof去判断数组和对象以及null的时候，区分不出来。此时，我们需要知道这个数据是什么对象就无法解决了。
- instanceof 可以区分判断是一个数组对象还是一个其他构造函数的实例对象。通过判断这个对象是哪个构造函数的实例对象，可以区分出来是数组还是其他的对象
- 判断 null 可以用 ===

### 十三、值类型、引用类型、栈、堆

1. 值类型和引用类型的概念

   - 值类型就是基本数据类型。

   - 引用类型就是对象数据类型、地址类型或者叫复杂类型。

2. 堆和栈的概念

   栈、堆、队列都属于数据结构范围的。堆和栈是内存的存数据结构，内存被开辟使用完后，就一定会被计算机回收(释放内存)。

   - 栈：数据结构(栈)，先进后出。栈一般比较小，计算机自动分配内存，存储速度不快(相对于堆来说)。

   - 堆：数据结构(链表)，不同于固定长度的数组，链表中的元素都不连续放置；添加和删除不需要移动其他元素。堆结构内存一般比较大，底层是需要程序员自己分配(js做了封装，会自动分配)，堆里面存储的都是一些比较复杂的站空间比较大的数据。

   - 队列：数据结构(队列)。先进先出；在队首移除，队尾添加。

   

3. 值类型和引用类型与堆栈的关系

   - 栈空间的释放会随着你的程序执行完成而弹出。

   - 堆空间的释放是靠垃圾回收机制进行的。当程序函数或者整个程序完成后，栈里面所有的东西都被释放销毁，堆当中的数据可能还存在，只是没有任何的变量指向(或者引用)，那么堆当中的数据就会变成垃圾对象，回收机制会在适当的时候将垃圾对象清理回收。
   - 如果我们在程序当中需要去删除对象，那么我们就将这个对象的变量赋值为null，代表这个对象引用被改变，这个对象也就成了垃圾对象，其实删除对象就是让堆当中的数据成为垃圾对象。`null就是用来初始化一个对象或者删除一个对象用的`。

4. js里面的垃圾回收机制有三种：

   [博客地址1](https://blog.csdn.net/m0_58239318/article/details/122030152)

   [博客地址2](https://www.jb51.net/article/229425.htm)

   核心思想 : 找到没用的变量, 释放它们的内存



### 十四、内置对象 JSON

1. 什么是JSON，JSON作用，JSON通常情况下说的是字符串也叫JSON串。

   - JSON：JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。JSON是js当中的一个内置对象，里面封装了对json格式数据的操作方法。
   - JSON的作用：前后台交互的最主要的手段，主要用于传送数据。

   - 在前端json串的格式：`对象和对象的数组(数组里面存对象)`，只不过要把这些数据转化成字符串形式(也就是加双引号)。

2. JSON对象的方法：`JSON.parse()`、`JSON.stringify()`

3. JSON大写：js当中的一个内置对象。json小写：是一种数据格式，是前后端目前数据交互的主要格式。以前传数据使用：xml。

4. JSON出现的时间：JSON是Douglas Crockford在2001年开始推广使用的数据格式，在2005年-2006年正式成为主流的数据格式，雅虎和谷歌就在那时候开始广泛地使用*JSON格式*。

[博客链接1](https://blog.csdn.net/qq_46454139/article/details/115435416?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165480159616781685352863%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165480159616781685352863&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-115435416-null-null.142^v12^rank_v32,157^v13^control&utm_term=js+json%E5%AF%B9%E8%B1%A1&spm=1018.2226.3001.4187)

[博客链接2](https://blog.csdn.net/bao19901210/article/details/78253895?ops_request_misc=&request_id=&biz_id=102&utm_term=js%20json%E5%AF%B9%E8%B1%A1&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-6-78253895.142^v12^rank_v32,157^v13^control&spm=1018.2226.3001.4187)

[博客链接3](https://blog.csdn.net/weixin_43903378/article/details/100083124?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165480202416781683933769%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=165480202416781683933769&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-4-100083124-null-null.nonecase&utm_term=js+json%E5%AF%B9%E8%B1%A1&spm=1018.2226.3001.4450)

### 十五、Math 工具对象

[博客链接1](https://blog.csdn.net/qq_46112274/article/details/121513659?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165480212116781683922305%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=165480212116781683922305&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-8-121513659-null-null.nonecase&utm_term=js+Math%E5%AF%B9%E8%B1%A1&spm=1018.2226.3001.4450)

[博客链接MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)

### 十六、Date 日期对象

[博客链接1](https://blog.csdn.net/weixin_42863800/article/details/107024401?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165480290716780357285849%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165480290716780357285849&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-4-107024401-null-null.142^v12^rank_v32,157^v13^control&utm_term=js+Date+&spm=1018.2226.3001.4187)

[博客链接2](https://blog.csdn.net/qq_37899792/article/details/91983831?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165480290716780357285849%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=165480290716780357285849&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-91983831-null-null.142^v12^rank_v32,157^v13^control&utm_term=js+Date+&spm=1018.2226.3001.4187)

[博客链接3](https://blog.csdn.net/lv842586821/article/details/83271788?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522165480314116782390582352%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=165480314116782390582352&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-7-83271788-null-null.nonecase&utm_term=js+Date+&spm=1018.2226.3001.4450)

### 十七、ES5严格模式

es5增加了严格模式

1. 为什么要使用严格模式
   - 消除JavaScript语法的一些不合理、不严谨的地方，减少一些怪异行为。
   - 消除代码运行的一些不安全之处，保证代码运行的安全。(如：delete obj，不会删除也不会报错，实际上应该要报错才对)
   - 提高编译器效率，增加运行速度。
   - 为未来新版本的JavaScript做好铺垫。
2. 严格模式主要都做了什么？
   - `“use strict”`，严格模式是双引号。针对脚本(针对所有)写的脚本的第一行，只针对函数写在函数的第一行。
   - 变量声明必须写var，不写var报错。
   - 禁止this指向window，如果构造函数忘记写new那么this不会影响全局。
   - 禁止随意删除变量。
   - 函数不能有重复的形参。

[博客链接，罗老师](https://segmentfault.com/a/1190000015798019)

### 十八、ES6定义变量(let + const)

- let使用及特点
  1. 块级作用域声明变量，es6都是处于严格模式下的。
  2. let定义的变量不会进行预解析。
  3. let变量不允许重复定义。
- const使用及特点
  1. 声明一个变量，变量的值无法更改，也是块级作用域。
  2. const定义的变量不可以修改，而且必须初始化。

### 十九、ES5 string方法

[博客链接1](https://www.jianshu.com/p/6209ffbdbae1/)

[博客链接2](https://blog.csdn.net/zsm4623/article/details/105346462)

[博客链接3](https://blog.csdn.net/qq_42880714/article/details/104806953)

### 二十、ES5 数组方法

[博客链接1](https://www.cnblogs.com/sqh17/p/8529401.html)

[博客链接2](https://www.cnblogs.com/jiuxia/p/11509616.html)

[博客链接3](https://blog.csdn.net/weixin_58032613/article/details/122629706)



### 二一、DOM

**一切皆对象**

1. DOM概念、作用

   - DOM: Document Object Model 文档对象模型
   - DOM 是一个使程序和脚本有能力动态地访问和更新文档的内容、结构以及样式的平台和语言中立的接口。
   - DOM 描述了处理网页内容的方法和接口。

   文档对象：

   1. 文档对象：document。document是window下的一个属性，代表整个DOM文档对象。
   2. 节点：元素、属性、文本、注释等等
   3. 元素：标签
   4. 根元素(root)：html标签
   5. 文档树(dom树)：以HTML为根节点，形成的一棵倒立的树状结构，我们称为DOM树。整个树上所有的东西都叫节点，节点有很多类，这些节点如果我们通过DOM方法去获取或者其他的操作去使用的话，就叫DOM对象。

2. window.onload：页面加载完成事件。一般操作DOM，都是等页面加载完成之后，才去操作元素和属性，如果页面没有加载完成就去获取DOM元素，有可能获取不到。

#### DOM 操作方式

获取DOM对象、操作DOM对象、事件绑定、操作元素属性

1. `document.getElementById()`：这个是document下的一个方法，通过id获取到相关元素，封装为dom对象返回。如果没有id没办法获取。

2. 点击事件
   - 事件三要素：1. 事件源。2. 事件。3. 事件处理回调函数。
   - 事件处理三大步：
     1. 获取事件源DOM对象。
     2. 添加事件监听。
     3. 书写处理回调。
   - 事件写好之后可以重复执行。
   
3. 循环绑定事件 + 操作元素内容
   - document.getElementById：只能通过ID去获取元素，并且只能获取一个元素返回。
   - document.getElementsByTagName：只能通过标签名去获取，并且获取到是多个返回一个数组，哪怕只有一个标签是这个类也是数组。
   - document.getElementsByClassName：只能通过类名去获取，并且获取到的是多个返回一个数组，哪怕只有一个标签是这个类也是数组。
   - 以上三个都比较局限，拿元素的时候，只能通过指定的属性去拿。
   - querySelector 和 querySelectorAll 也可以获取 dom 元素，但是它们和上面不同的是，它们是根据选择器去获取，也就是说只要是选择器能选择到，它们就可以获取到，只要选择器选的对就可以获取到。
   - querySelector 专门用来获取只有一个元素，返回的是单个元素对象。
   - querySelectorAll 专门用来获取率选择器选中多个元素，返回也是数组。
   
4. 鼠标事件 + style样式操作，操作元素样式
   - 鼠标事件：一般就这9种。onmousemove/onmouseover/onmouseout/onmouseenter/onmouseleave/onclick/onmousedown/onmouseup/ondbclick
   - onmouseover/onmouseout
   - onmouseenter/onmouseleave(移入事件建议使用这一对)
   - **一个元素是可以添加多个事件的**
   
5. innerHTML、innerText、textContent之间的区别

   - innerHTML 和 innerText之间的区别：

     - 设置内容的时候：

       1. 如果内容当中包含标签字符串，innerHTML会有标签的特性，也就是说标签会在页面上生效。
       2. 如果内容当中包含标签字符串，innerText会把标签原样展示在页面上，不会让标签生效。

     - 读取内容的时候：

       1. 如果标签内部还有其他标签，innerHTML会把标签内部带着其他的标签全部输出。
       2. 如果标签内部还有其他标签，innerText 只会输出所有标签里面的内容或者文本，不会输出标签。

       ```html
       <div id="dv">
           i love you!
           <span>赵丽颖</span>
       </div>
       
       <script>
       	// 读取
           var dv = document.getElementById('dv');
           console.log('dv', dv.innerHTML);
           console.log('dv', dv.innerText);
       </script>
       ```

       

   - textContent 和 innerText 的区别：

     - textContent 可以获取隐藏元素的文本，包含换行和空白
     - innerText 不可以获取，并且不包括换行和空格

     

6. 排他操作修改文本内容

   分两步：

   1. 让所有的都成为一种样式
   2. 让当前发生事件的对象独自成为一种样式

   for 循环对多个对象添加事件的时候记住，当时for循环只是添加了事件监听，而事件回调函数是不会执行的。事件回调函数当中的代码是在事件发生的一刹那执行的。但是此时，for循环早就都已经执行完毕，所以在事件函数当中只要出现了循环变量就肯定报错。

7. keyup & keydown & focus & blur：针对表单类元素

   1. keyup, keydown 事件。一般用的都是keyup事件，它能够去报键盘事件只执行一次。
   2. keyCode：event.keyCode 获取键盘按下的 Unicode 编码。keyCode存在于事件对象当中，也就是我们回调函数的第一个形参。这个对象不是我们创建的，当事件发生的时候，系统会创建好这个事件对象，并且传参调用，事件对象当中包含了和事件相关的一切。
   3. focus, blur 事件

##### 节点

1. 节点的概念

   什么是节点？文档树所有包含的东西都可以称作节点，最关注的是元素节点。

   查找节点：查找节点 是相对的操作，如果你拿html的子节点，就是html当中所有的节点，但是不包含后代节点，只是子节点(head和body)。html节点拿到的不包含第一个文本节点和最后一个文本节点。我们自己在 body当中写的子元素会带上第一个和最后一个文本节点。

   节点的分类12中，重点了解3种。

2. 子节点和子元素(父节点和父元素)

   子节点和子元素：

   - childNodes：拿到的是某个元素的子节点，包括元素子节点和文本子节点，如果有注释，还有注释节点。

   - children：

     子节点：childNodes(儿子节点)

     - 高级浏览器：元素，文本(文本、空格、换行)，注释

     - 低版本浏览器：元素，文本(不包括空格和换行)，注释

     子元素：children

     - 高级浏览器：元素
     - 低版本浏览器：元素、注释

   父节点和父元素：

   - 父节点：parentNode
     - 其实就是父元素(标签)，所有浏览器都能使用
   - 父元素：parentElement
     - 父标签，所有浏览器都能用

3. 兼容性封装获取其他节点的方式

   获取其他节点：

   1. 第一个子节点：都认识，`firstChild`
   2. 第一个子元素节点：只有高级浏览器可以使用 `firstElementChild`
   3. 最后一个节点：都认识，`lastChild`
   4. 最后一个元素节点：只有高级浏览器可以使用，`lastElementChild`
   5. 上一个兄弟节点：都认识，`previousSibling`
   6. 上一个兄弟元素节点：只有高级浏览器可以使用，`previousElementSibling`
   7. 下一个兄弟节点：都认识，`nextSibling`
   8. 下一个兄弟元素节点：只有高级浏览器可以使用，`nextElementSibling`

4. 创建节点的三种方式

   1. Document.write()，这个方法根本就不用
      - Document.write() 只能在页面加载的过程中使用，如果当页面加载完后，再使用会将其它的dom干掉。
      
   2. Obj.innerHtml

   3. document.createElement()

      元素对象.appendChild(被追加的元素对象)

5. 节点常用方法

   以下方法都是父元素调用，操作子元素：

   1. 插入节点：insertBefore(新节点，参照节点);
   2. 替换节点：replaceChild(新节点，被替换的节点);
   3. 删除节点：removeChild(被删除的节点);
   4. 追加节点：appendChild(被追加的节点);
   5. 节点.remove(pc端 ie不支持);

### 二二、BOM

1. 事件绑定和解绑(要对应)：DOM0 1 2 3

   DOM0 和 DOM2 有自己独立的事件绑定和解绑方式

   [DOM1 和 DOM3 没有。](https://blog.csdn.net/Josiah_Yuan/article/details/123818609)

   1. DOM0事件绑定和解绑：DOM0事件解绑，本质上就是把事件对象的时间属性断开指向。如：`box.onclick = null;`
   2. DOM2事件绑定和解绑
      - 可以添加同一类事件多次
      - 高级浏览器和ie绑定方式(兼容封装)
   3. DOM0事件所有的浏览器都能使用。DOM2事件高级浏览器可以使用，IE10以下给出另外一个绑定方式。不过现在不用考虑IE了，IE在2022.6.15彻底下岗了。

2. 事件流(事件传播)

   1. 捕获事件流(网景)：最终几乎不用。
   2. 冒泡事件流(ie)：最终我们所用的事件传播都是冒泡。
   3. 标准DOM事件流：这个是我们现在用的最标准的事件流。里面包含三个阶段：由捕获 --》获取元素 --》 最后冒泡。这三个阶段当中的捕获和冒泡可以由程序员自己选择，但是通常情况我们都是使用默认(默认就是冒泡)。

3. 事件冒泡和事件委派

   1. 事件冒泡的好处及阻止事件冒泡

      事件冒泡的好处：就是可以进行事件委派。

      阻止事件冒泡：

      - event.stopPropagation()
      - window.event.cancelBubble = true;
      - return false;

   2. 事件委派用法、好处、原理

      什么时候用：出现新添加的东西，并且新添加的东西要和老的拥有同样的行为，此时我们就想事件委派。

      事件委派的做法：给爹添加事件，不给元素本身添加，事件发生后，通过爹去找，真正发生事件的元素进行处理。

      好处：可以节省很多次的绑定。

   3. onmouseenter、onmouseleave：没有事件冒泡。如果是一个父子元素模型，对父元素添加移入和移出，当鼠标移入父元素里面的子元素的时候，**事件并没有移出然后再移入**，也就是说事件元素没有切换。

   4. onmouseover、onmouseout：有事件冒泡。如果是一个父子元素模型，对父元素添加移入和移出，当鼠标移入父元素里面的子元素的时候，**事件会移出然后再移入**，也就是说事件元素会有切换。事件委派的时候，必须使用这一对

4. window对象(这里才是BOM，上面的三点还是属于DOM的内容)

   1. window对象概念，使用

      window对象是BOM的顶级对象。

   2. location：`window.location` 可以让用户获取当前页面地址以及重定向到一个新的页面。

      history：`window.history` 对象包含浏览器的历史记录，window可以省略。这些历史记录以栈(FIFO)的形式保存，页面前几则入栈，页面返回则出栈。

      navigator：`window.navigator` 是一个只读对象，它用来描述浏览器本身的信息，包括浏览器的名称、版本、语言、系统平台、用户特性字符串等信息。

      screen：`window.screen` 对象提供了用户显示屏幕的相关属性。比如：显示屏幕的宽度、高度，可用宽度、高度。

   3. window.onload：当页面资源加载完成，该事件触发。

      window.onresize：当改变浏览器大小的时候，该事件会触发。
   
   4. 定时器(定时器操作是异步的)
   
      定时器种类：
   
      - 单词定时器 `setTimeout(回调,1000)`：一般用来做延迟效果，定时炸弹等。
   
      - 多次定时器 `setInterval(回调,1000)`：和循环类似，用来做闹钟等。
   
      清除定时器：
   
      - 清除单次定时器：`clearTimeout(timer)`
      - 清除多次定时器：`clearInterval(timer)`
   
5. event 对象

   1. event概念，作用

      系统给我们封装的，任何事件都会有这个event对象，就是回调函数第一个形参。

   2. event.target || event.srcElement 作用。这个是在事件委派的时候，找到目标元素。

   3. offsetX & offsetY：拿到是鼠标相对自身元素的`水平距离和垂直距离`，相对的是自身元素的左上角(以自身元素的左上角为原点)

      clientX & clientY：拿的是鼠标相对视口的`水平距离和垂直距离`，相对的是视口的左上角(以视口的左上角为原点)

      pageX & pageY：拿到是鼠标相对页面的`水平距离和垂直距离`，相对的是页面的左上角(以页面的左上角为原点)
      
      

6. 元素的大小和位置

   **Offset系列：只读**

   1. offsetWidth：拿的是盒子：内容 + padding + border的大小
   2. offsetHeight：拿的是盒子：内容 + padding + border的大小
   3. offsetLeft：拿的就是你定位后的Left值。
   4. offsetTop：拿的就是你定位后的Top值。
   5. 案例：盒子左右摇摆

   **Client系列：只读**

   1. clientWidth：拿的是盒子：内容 + padding 的大小
   2. clientHeight：拿的是盒子：内容 + padding 的大小
   3. clientLeft(几乎不用)：拿的就是你定位后的Left边框值。
   4. clientTop(几乎不用)：拿的就是你定位后的Top边框值。
   5. 案例：视口宽高求法：document.documentElement.clientWidth + document.documentElement.clientHeight

   **Scroll系列：**

   1. scrollWidth: 只读(几乎不用)：当内容比和盒子小的时候，拿的是盒子的clientWidth。当内容比盒子大的时候，拿的是内容的offsetWidth + 盒子的一侧内边距。
   2. scrollHeight：只读(几乎不用)：当内容比和盒子小的时候，拿的是盒子的clientHeight。当内容比盒子大的时候，拿的是内容的offsetHeight + 盒子的一侧内边距。
   3. scrollLeft：可写：内容滚动的Left距离。
   4. scrollTop：可写：内容滚动的Top距离。
   5. 案例：1. 系统滚动条 2. 导航跟随

   **元素的大小，宽和高的获取：以后我们拿元素的宽和高，先看元素有没有边和宽，如果没有边框，那么clientWidth和offsetWidth是一样的。如果有边框，看你是否需要边框，需要的话就用offsetWidth，不需要的就用clientWidth。scrollWidth几乎不用。**

7. 初始包含块及系统滚动条的控制

   html和body这两个元素overflow的scroll属性，控制这系统的滚动条。系统的滚动条有两个，一个是body身上的，一个是document身上的，我们平时看到的那个滚动条是document身上的。如果我们想要控制系统滚动条哪个显示，那个关闭分以下情况：

   1. 单独的给body或者html设置：`overflow: scroll;` 滚动条打开的全部都是document的。
   2. 如果两个元素同时设置overflow属性，body设置的是scroll, html设置的是hidden，那么document的滚动条被关闭，body身上的滚动条会打开。相反设置的话，body身上被关闭，document身上的被打开。
   3. 如果两个元素同时设置overflow：hidden; 那么系统的两个滚动条全部被关闭。
   4. 如果两个都设置`overflow: scroll;`那么html会打开document身上的，而body会打开自己身上的滚动条。

   **由此我们也引出如何进制系统滚动滚动条：**

   `html, body {overflow: hidden; height: 100%;}`

   加上`height: 100%;`只是为了然该设置的`overflow:hidden;`更有说服力，只有内容超出才会被隐藏或者出现滚动条。如果不加上`height: 100%;`，那么body和html高度将由内容自动撑开，也就是说body当中的内容永远不会溢出。

   

### 二三、拖拽

1. 拖拽的原理(画图)

   - 点击元素拿到元素的初始位置和鼠标的初始位置
   - 移动的时候拿到鼠标最后的位置，可以求出鼠标的距离差
   - 元素最终的位置 = 元素的初始位置 + 鼠标的距离差
   - 注意：两个方向都要去照顾

2. pc拖拽事件的问题

   事件在谁身上添加？

   - 刚开始我们把所有的事件全部添加到元素身上
     - 元素事件是怎么去加，全部平行的去加还是嵌套的去加，思考过程 --- 应该是放在里面嵌套去加。
     - move事件在鼠标up之后不会自动消失。
     - 在up事件当中需要将鼠标的move事件和up事件一起取消掉。
     - 当在元素内部我们有文本，文本可以拖拽，所以要取消浏览器的默认行为。
     - 取消默认行为之后，发小ie的默认拖拽还是会存在，证明ie的默认行为不包含这个拖拽的，所以我们要进行全局捕获到该元素身上。
       - box.setCapture && box.setCapture(); // 当鼠标点击元素之后，把鼠标的后续事件全部捕获到该元素身上。
       - box.releaseCapture && box.releaseCapture(); // 鼠标的事件全局捕获，有添加就要有释放，否则后续点击任何地方都相当于在点击box。
   - 接着我们快速的去拖动元素
     - 当鼠标移出元素，再次回去的时候，元素的move事件仍然存在，那么我们就该考虑事件添加是否有问题。
     - 拖拽当中mousedown的事件确实给元素添加，但是mousemove和mouseup事件要添加在父元素身上，使用事件冒泡去解决元素的移动并且鼠标移出元素的时候，我们的事件仍然有效。

3. 在基础的拖拽事件上添加边界问题

   当元素在四周的时候，不能超出范围，作出范围界定。

4. 当元素距离四周边界50px时候立即吸附到边界(吸附效果)

5. 元素碰撞问题(九宫格)

   - 计算元素到视口上方和左边的距离：`getBoundingClientRect()` 只能读不能写。[方法博客](https://blog.csdn.net/guzhao593/article/details/85285080)
   - 主要是检测什么时候盒子碰撞
   - 使用图片切换模拟盒子碰撞

6. 自制滚动条(布局)

   - 我们的页面架构首先要清楚：页面的最外层是document，紧接着是初始包含块、html、body，其次是我们的元素
   - 我们禁止了系统的滚动条(因为各大浏览器的系统滚动条风格不一，有可能会影响我们的页面布局)
   - 所以在body当中我们一般会有最外的一个盒子模拟body区域，在这个盒子的右侧会定位一个盒子模拟滚动条

   自定义滚动条的万能比例：

   **滚动条的高度 /  屏幕的高度 = 屏幕的高度 / 内容的高度 = 滚动条的移动距离 / 内容的滚动距离**

7. 鼠标滚轮事件

   盒子滚动滚轮改变高度案例

   ie/chrome: mousewheel(dom2的标准模式)

   - event.wheelDelta

     上：120  // 我的火狐是 150

     下：-120 // 我的火狐是 -150

   Firefox: DOMMouseScroll(dom2的标准模式)

   - event.detail

     上：-3

     下：3

   `return false` 阻止的是 dom0 所触发的默认行为

   dom2 需要通过event下面的 `event.preventDefault()`



### 二四、正则表达式

1. 正则的概念

   - 是什么？
     1. 正则表达式是描述字符模式的对象。
     2. 正则表达式用于对字符串模式匹配及检索替换，是对字符串执行模式匹配的强大工具。
     3. 简单点：**正则表达式是一种字符串匹配规则。**
   - 为什么？
     1. 假设我想要知道一个字符串当中是否有6，该如何去做？
     2. 假设我想知道字符串当中是否有数字又该如何？
     3. 假设我想从字符串当中找到abc怎么去做？
     4. 假设我想知道这个电话号码是否合法如何去做？
     5. 。。。。。。
   - 怎么玩？

2. 创建方式

   - 字面量创建：`var patt = /pattern/modifiers`
   - 构造函数创建：`var patt = new RegExp(pattern, modifiers);`
   - pattern(模式)：描述了表达式的模式
   - modifiers(修饰符)：用于指定全局匹配、区分大小写的匹配和多行匹配。

   注意：当使用构造函数创造正则对象时，需要常规的字符转义规则(在前面加反斜杠`\`)。比如：以下是等价的：

   ```js
   var re = new RegExp('\\d+');
   var re = /\d+/;
   ```

   

3. 正则表达式规则写法

   - 修饰符：用于执行区分大小写和全局匹配

     `i`：忽略到小写

     `g`：执行全局匹配(查找所有匹配，而非在找到第一个匹配后停止)

     `m`：执行多行匹配

   - 方括号：方括号用于查找某个范围内的字符

     `[abc]`：查找abc中的任意一个

     `[^abc]`：查找不是abc的任意一个

     `[0-9]`：查找任意一个数字

     `[a-z]`：查找任意一个小写字母

     `[A-Z]`：查找任意一个大写字母

   - 元字符：

     `.`：匹配任意字符不包含\n(换行和结束符)

     `\d`：任意数字。等价于`[0-9]`

     `\D`：任意非数字。等价于`[^0-9]`

     `\s`：任意空白字符。

     `\S`：非任意空白字符。

     `\w`：任意单词字符，数字、字母、下划线。等价于：`[a-z A-Z _]`

     `\W`：任意非单词字符。等价于：`[^a-z A-Z _]`

     `\b`：单词边界

     `\B`：非单词边界

     `\n`：换行符

     `\f`：换页符

     `\r`：回车符

     `\t`：制表符

     `\v`：垂直制表符

   - 量词

     `+`：1个或者多个前一个字符

     `*`：0个或者多个前一个字符

     `?`：0个或者1个前一个字符

     `{n}`：n个前一个字符

     `{m,n}`：m到n个前一个字符

     `{m,}`：至少m个前一个字符

     `$`：结尾

     `^`：开头

   - 分组

     `()`：分组后的反向引用

     `|`：或

   - 贪婪和非贪婪：量词后面的问号?代表非贪婪

4. 正则对象的方法

   - Reg.test()
     - test() 方法用于检测一个字符串是否匹配某个模式，如果字符串中含有匹配的文本，则返回true，否则返回false。
     - 判断字符串当中是否有数字
     - 判断字符串当中是否含有abc
     - 判断字符串是否是一个11位的数字
   - Reg.exec()
     - exec() 方法用于检索字符串中的正则表达式的匹配。
     - 该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为null。
     - 注意：此方法每次只会返回一个结果，如果要找到所有的，需要循环去调用必须全局匹配修饰。

5. 字符串方法使用正则

   - str.match()：**这个用得多。**在字符串中搜索符合规则的内容，搜索成功就返回内容，格式为数组，失败就返回null。如果不加g，那么返回第一个符合的结果，加g返回所有结果的数组。

     找一个是详细进行展示，找多个是展示找到的内容。

   - str.search()：在字符串中搜索符合正则的内容，搜索到就返回出现的位置(从0开始，如果匹配的不只是一个字母，那只会返回第一个字母的位置)，如果搜索失败就返回-1， 只能返回第一次。

   - 注意：上面两个方法类似正则的方法：reg.test和reg.exec

   - str.test() 和 str.search() 很像。前者返回的是true或者false，后者返回的是匹配到的子串的位置或者-1。

   - str.replace()：查找符合正则的字符串，就替换成对应的字符串。返回替换后的内容。



### 二五、总结

#### 对象：

1. 数组(既是数组又是对象，数组操作元素，对象操作属性)。
2. 函数(既是函数又是对象，当函数去用，是为了执行某个功能。当对象去用是为了操作属性，当对象如：Person.prototype.eat = fun1)
3. 对象(Object的实例对象，还有构造函数的实例对象)
4. 内置工具对象(Math，Date，JSON)
5. 包装对象(String，Number，Boolean)：中间系统发生了什么，我们不用关心，理解就行。
6. 正则对象
7. DOM对象
8. BOM对象

#### css居中：

- 文本在div居中

  ```css
  text-align: center;
  line-height: DIV高度;
  ```

  

- 行内在div居中

  ```css
  text-align: center;
  line-height: DIV高度;
  ```

  

- 行内块在div居中

  ```css
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  // 行内块必须设置高度
  ```

  

- 块级在块级居中

  ```css
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  ```

  ```css
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -盒子的一半。
  margin-top: -盒子的一半。
  ```

  ```css
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ```

  

#### 单行文本溢出

总结为 WTO

```css
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
```

#### 元素隐藏：

- display

- visibility

- opacity

- width: 0; height:0;

- transform: translateX translateY rotateX rotateY rotate(效果和rotateZ是一样的) scale为0

  

#### 3d变换

如果不开启父元素3D空间，那么子元素设置了3D变换的元素，层级会高出来。































