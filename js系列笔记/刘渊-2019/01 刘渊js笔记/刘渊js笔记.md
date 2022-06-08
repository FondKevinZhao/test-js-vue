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
     
     2. 原型对象的作用
     
   - 原型链
     1. 对象子啊查找属性或者方法的过程

































































































































































































































































































































































































































































































































































































































































































































































































































































