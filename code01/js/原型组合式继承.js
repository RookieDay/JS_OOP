	// 组合式继承
	/*
	var o1 = { num: 123 };
	var o2 = { num2: 456 };
	// o2 继承自 o1
	o2.extend = function ( obj ) {
		for ( var k in obj ) {
			this[ k ] = obj[ k ];
		}
	};
			
	o2.extend( o1 );
	*/


	function Fn() {}

	// 组合式实现 原型继承
	// ???
	Fn.fn = Fn.prototype;
	Fn.fn.extend = Fn.prototype.extend = function(obj) {
	    for (var k in obj) {
	        this[k] = obj[k];
	    }
	};

	Fn.fn.extend({});



	$('<p>ppp</p>').appendTo( ? )
	$('<p>ppp</p>').appendTo(document.body)
	$('<p>ppp</p>').appendTo('body')
	$('<p>ppp</p>').appendTo($('body'))




	/*
	 * 直接继承与间接继承来源于 模拟 Java 等语言啊概念
	 * 
	 * 在 js 中 一个构造函数 Person 创建的对象, 上面继承自他的原型 Person.prototype
	 * 而 Person.prototype 是继承自 Object.prototype 所以
	 * 我们称 Person 的实例 直接继承自 Object.prototype, 因为中间没有切入其它对象
	 * 
	 * 
	 * 间接继承就是说 Person 的实例与 Object.prototye 中间隔了一层到多层对象
	 * 
	 * function Animal() {}
	 * var am = new Animal();
	 * 
	 * function Person() {};
	 * Person.prototype = am;
	 * 
	 * var p = new Person();
	 * 
	 * p 间接的继承自 Object.prototype
	 * 
	 * 
	 */