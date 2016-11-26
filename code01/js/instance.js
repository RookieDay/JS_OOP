// instanceof
// instance	实例
// of		的

// 用法
// boolean 对象 instanceof 构造函数

// console.log( [] instanceof Array );
// console.log( [] instanceof Object );

// instanceof 的运算规则?

function Fn() {}

function Foo() {}

// var o = new Fn();

// console.log( o instanceof Foo );

Fn.prototype = new Foo();

var o = new Fn();

console.log(o instanceof Foo);

// 规律
// 任意的一个对象都有一条原型链
// 那么 只要是 在该链上的构造函数, 这个判断都是 true

// 或

// 如果直接判断的是构造函数, 那么也是 true