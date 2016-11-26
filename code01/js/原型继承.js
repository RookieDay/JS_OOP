// 什么是原型式继承
// 对象继承自其原型对象

// 所谓的原型式继承就是在 对象的 原型对象中加东西即可
// 如何使用原型对象
// 1, 利用对象的动态特性添加成员
/*
var o = {};
o.name = 'jim';
			
var Person = function () {};
Person.prototype.sayHello = function () {
	alert (' 哈哈哈 ');
};
*/
// 此时 原型对象是对象, 可以利用动态特性随时添加成员
// 添加的成员都会被 构造函数创建的对象所继承





// 2, 利用覆盖原型对象
//			var Person = function () {};
//			Person.prototype.sayHello = function () {
//				alert (' 哈哈哈 ');
//			};
//			Person.prototype.sayGoodbye= function () {};
//			Person.prototype.sayLove = function () {};
// ...

// 如果需要添加的内容非常多
var Person = function() {};
Person.prototype = {

    sayHello: function() {},
    sayGoodbye: function() {},
    sayLove: function() {}
};
// 这里由 Person 创建出来的对象什么类型?




// 3, 利用组合式继承添加原型成员