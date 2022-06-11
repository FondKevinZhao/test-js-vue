// 字符串类型
var userName = '肖肖小肖';
// number类型
var userId = 1;
userName = '小仙女';
userId = 2;
// 布尔类型
var isShow = false;
isShow = true;
// undefined类型
/*
  js中出现undefined的场景：
    1. 变量被声明了，但没有赋值时，就等于 undefined。
    2. 调用函数时，应该提供的参数没有提供，该参数等于 undefined。
    3. 对象没有赋值的属性，该属性的值为 undefined。
    4. 函数没有返回值时，默认返回 undefined。
*/
// 在ts中使用undefined类型，那么也就只能赋值为undefined
var unType = undefined;
unType = undefined;
// unType = 1; // 会报错
// null类型
// 在ts中使用null类型，跟undefined同理，也只能给它赋值为null
var nullType = null;
nullType = null;
// nullType = 1; // 会报错
// 直接赋值undefined或者null，后期用的很少
// 以上为5中基本类型
// 数组类型
var arr = []; // arr:[] 表示的是一个空数组，这个时候，你不能给这个空数组赋值，否则会报错
var arr1 = ['a'];
var arr2 = [5];
// var arr3:[string | number] = ['a', 5]; // [string | number] 表示二选一，写两个就会报错
// Ids是一个只能装number类型数据的数组
var ids = [];
ids.push(1);
ids.push(2);
ids.push(3);
// ids.push('小肖'); // 不好意思，这里不能放字符串，因为类型不同
console.log(ids);
var userNames = [];
userNames.push('小肖');
console.log('userName', userName);
// 元组：已知元素的数组(我知道数组里面有什么玩意儿的一个数组)
var typeArr;
// typeArr = ['小肖', 20, true]; // 如果写了多少的元素，你都要写全，不然也会报错
// typeArr = ['小肖', 20, true,'aa', 11];  // 写多了也不行
typeArr = ['小肖', 20, true, 'aa']; // 写全就不会报错了
console.log('typeArr', typeArr);
// 枚举
// 定义一个枚举。typeS是枚举的名字
// 枚举可以生成一个相互引用的对象
// 枚举对象跟我们平时的对象有点不同，枚举对象有索引。如：我们可以通过typeString 找到 0，也可以通过索引0找到typeString。
// 这种类型只要有了就不能再写了。如：已经有了typeString，那么后面就不能重复再写一个typeString，写了会报错
var typeS;
(function (typeS) {
    typeS[typeS["typeString"] = 0] = "typeString";
    typeS[typeS["typeNumber"] = 1] = "typeNumber";
    typeS[typeS["typeNull"] = 2] = "typeNull";
})(typeS || (typeS = {}));
console.log(typeS);
// 需求：模拟后台给的编码所对应的内容
// 枚举的索引，默认是从0开始，但是是可以被修改的。我们可以根据实际需求来做修改。比如说：成功是code码200
var msgs;
(function (msgs) {
    msgs[msgs["\u6210\u529F"] = 200] = "\u6210\u529F";
    msgs[msgs["\u5BC6\u7801\u9519\u8BEF"] = 201] = "\u5BC6\u7801\u9519\u8BEF";
    msgs[msgs["\u8D26\u53F7\u9519\u8BEF"] = 206] = "\u8D26\u53F7\u9519\u8BEF"; // 账号错误 206
})(msgs || (msgs = {}));
console.log(msgs);
console.log(msgs[206]);
// any类型：任意类型，跟写js一样
var typeString = 'aa';
typeString = 1;
typeString = true;
typeString = null;
typeString = [];
typeString = {};
// void 表示的是：没有值。如果给一个变量为void，那么它除了undefined，任意一个类型给它赋值都是undefined。
// void 的最佳使用场景就是，规范一个函数没有返回值的时候
var vTs;
vTs = undefined; // 表示没有值
/*
这里都报错
vTs = 18
vTs = '18'
vTs = boolean */
// function
var fun = function () { };
fun = function () {
    console.log(1);
};
var fun2 = function () { };
fun = fun2; // 把一个function赋值给另一个function
// 使用
// obj对象里面的属性名字和值类型要必须跟interface中InfoInt声明的一致才不会报错
var obj = {
    username: '肖肖',
    id: 1,
    age: 18
};
// obj.type = 2; // 使用了接口的对象，不能随意添加属性
obj.id = 2; // id可改
// obj.age = 19; // 报错，age是只读的，不能修改
// 给obj添加属性：[propsName:string]: any
obj.color = 'red';
var fun1 = function (userName) { return "hi~~".concat(userName); };
var user = {
    name: 'tina',
    sayHi: function () { return console.log(123); }
};
var userInfo = {
    name: 'tina',
    id: 1,
    type: 1
};
