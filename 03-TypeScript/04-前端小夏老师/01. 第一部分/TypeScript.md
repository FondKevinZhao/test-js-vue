### 1. 数据类型
#### js当中的数据类型

1. 原始数据类型：boolean string number null undefined symbol
2. 引用数据类型：object

#### ts当中的数据类型

1. 基础类型：boolean string number null undefined symbol any never

2. object类型注解：
   1. 对象：interface 
   
   2. 数组：number[] 泛型的写法：Array<number>
   
   3. 函数：
   
      ```tsx
      let test = function (a:number, b:number):number {
          return a + b;
      }
      ```
   
   4. 抽象类

#### 新的语法特性

1. as 断言
2. class类关键字在ts中的使用(OOP 面向对象的三大特性：封装，继承，多态)

### 2. 原数数据的注解

#### 布尔值注解

```jsx
let isDone: boolean = false;
```



#### 数字的注解

```jsx
let decLiteral: number = 6;
```



#### 字符串的注解

```jsx
let name: string = 'bob';
```



#### any的注解

任意数据类型

1. 如果是不同变量的话，可以是任意的数据类型。
2. 如果是对象的话， any 不能提示原有的属性和方法。
3. 未给初始值的变量类型为any。















































































































































