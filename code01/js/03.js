// 测试

// 凡是函数就有属性 prototype 
// 由某一个函数 new 出来的对象, 会自动的链接到 该函数的 prototype
var Fn1 = function() {};
var Fn2 = function() {};

var f1 = new Fn1(); // 自动的链接到 Fn1.prototype
var f2 = new Fn2(); // 自动链接到 Fn2.prototype

// 测试
var o1 = new Object(), // o1 -> Object.prototype
    f = new Array(3), // f -> Array.prototype
    d = new Date(); // d -> Date.prototype

// 链接到 prototype 上有什么用?
// 属性( 属性与方法 )
var p = {
    name: 'jim',
    age: 19,
    sayHello: function() {}
};
// 如果访问对象的属性, 就在当前对象中找, 如果没有在其原型对象中找
// 原型对象就是对象的构造函数的 prototype 属性

// 原型对象与原型属性

// __proto__ 与 prototype 有什么区别?
// __proto__ 是站在对象的角度讨论其原型对象
// prototype 是站在构造函数的角度讨论原型属性, 或构造函数创建的对象的原型对象

// 提问
// 1, 笔记
// 2, 判断有限数字		isFinite()
console.log(10 / 0); // => 10 / x , x->0
console.log(isFinite(10 / 0));

// 判断是数字
// 做数学运算
var a = '123';
var b = 'abc';

console.log(a - 0);
console.log(b * 1);
// 判断数字是 NaN
// iSNaN
// 在 js 中有一个特性, NaN 与自己不相等
console.log('123' == '123'); // 引用类型

var ooo = {};
var ooo2 = ooo;
console.log(ooo === ooo2);

var nan = NaN;
var nan2 = nan;
console.log(nan == nan2);

console.log(NaN == NaN)


// setTimeout 多少秒后执行 1 次
// setInterval 多少秒后 执行, 间隔 该描述再次执行, 直到 clearInterval