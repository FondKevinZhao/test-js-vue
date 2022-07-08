/* 
  基础静态类型和对象静态类型
    - 基础静态类型：number, string, null, undefined, boolean, void, symbol 这些都是基础静态类型
    - 对象静态类型：
*/

const count: number = 918;
const myName: string = 'jspang';
// null, undefined, boolean, void, symbol 这些都是基础静态类型



// 对象静态类型
const xiaoJieJie: {
  name: string,
  age: number
} = {
  name: '大脚',
  age: 18
}

const xiaoJieJies: string[] = ['谢大脚', '刘英', '123'];
console.log(xiaoJieJies);
