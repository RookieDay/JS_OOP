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
		// var Person = function () {};
		function Person() {}
		//凡是有了函数 默认就有prototype 默认的prototype 它里面有constructor属性 指的就是构造函数

		Person.prototype = {
		    //  原来的prototype被当前的替换了
		    constructor: Person,
		    //   ** ** ** ** ** ** ** ** 加上这句话后
		    sayHello: function() {},
		    sayGoodbye: function() {},
		    sayLove: function() {}

		};
		// 这里由 Person 创建出来的对象什么类型?
		// Object
		// 为什么? 合理吗?
		var p = new Person();

		console.log(p.constructor.name);
		//	-- > 出来的是Object 加上上面那句话 就是Peroson
		//	p里面没有 就去原型对象里面找 原型里面没有， 被替换了 去原型对象的原型对象去寻找 是Object

		// 覆盖原型对象实现继承的时候, 一定要给新对象添加一个 constructor 属性
		// 以便模拟对象的类型. 但是如果对对象的类型要求不严格可以忽略

		// 3, 利用组合式继承添加原型成员
		// 对象.extend( 对象 )