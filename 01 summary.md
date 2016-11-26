// 原型式继承
	// 1, 概念: 对象继承自原型对象: 对象没有的成员, 可以又原型对象提供
	// 2, 实现方式
	//		-> 动态添加原型对象的成员
	//		-> 直接替换原型对象( 如果对类型要求严格需要添加 constructor 属性 )
	//		-> 利用 extend 函数给原型对象添加成员
	
	// 经典的继承代码
	var o1 = { name: 'tom' };
	var o2 = Object.create( o1 );
	
	// o2 作为对象, 他的原型对象有谁决定
	// o2 的原型对象有构造函数的 prototype 决定
	// o2 的原型对象是 o1
	// 结论
	// o2 的构造函数的 prototype = o1
	
	// o2 有构造函数吗?
	// o2 是由 create 函数创建, 那么在函数内部有一个构造函数就可以了
	var create = function ( obj ) {
		function F() {}
		F.prototype = obj;
		return new F();
	}
	
	
	// 浏览器兼容性的问题
	// 1, 直接交给原生对象, 给原生对象提供功能
	if ( !Object.create ) {
		Object.create = function ( obj ) {
			function F() {}
			F.prototype = obj;
			return new F();
		}
	}
	
	// 2, 无论是什么浏览器, 都执行通用的方法.
	// 在方法中判断是否使用原生方法
	function create( obj ) {
		if ( Object.create ) {
			// 判断浏览器是否支持
			return Object.create( obj );
		} else {
			function F() {}
			F.prototype = obj;
			return new F();
		}
	}

	// 1, 将声明提到前面, 如果有重名的顺序不允许修改
		// 2, 依次执行代码( 画图 )
		function Foo(){
			getName = function(){ alert(1); };
			return this;  // 如果是以函数的形式调用 this 是全局对象
		}
		var getName;
		function getName(){ alert(5); }
		
		Foo.getName = function(){ alert(2); };
		Foo.prototype.getName = function(){ alert(3); };
		getName = function(){ alert(4); };
		

		Foo.getName();             // ?		2
		getName();                 // ?		4
		Foo().getName();           // ?		1
		getName();                 // ?		1
		new Foo.getName();         // ?		2
		(new Foo()).getName();     // ?		new Foo() 返回 Foo 的对象 3
		new new Foo().getName();   // ? 	3
		// 解释
		// new ((new Foo()).getName())
		// (new (new Foo())).getName()

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title></title>
    <script type="text/javascript">
        // 词法作用域
        // 在 开发语言中 常见的作用域规则就是: 块级作用域 和 词法作用域
        // 

        // 什么叫作用域?
        // 起作用的区域
        // 定义变量后, 可以在哪一个范围内使用该变量

        // 块级作用域
        // 所谓的块级作用域就是 用一个块 结构分割变量的访问区域
        // 所谓的块就是 {}
        // 代表语言: C 语言( C 系 )


        // 词法作用域
        // 就是变量的作用范围, 在书写代码的时候就已经决定, 与运行时无关
        // 分割作用域的只有函数

        // 词法作用域 解释

        // 只和代码的书写，定义时的顺序有关，和运行时候的顺序无关
        // 函数内部可访问外部的变量，反之则不允许

        // 面试题

        /*
        if ( 'a' in window ) {
        	var a = 10; // 一个是声明, 一个是赋值
        }  
        alert( a );
        */
        // 10
        // undefined
        // err
        // null


        // 变式
        /*
        if ( 'b' in window ) {
        	var a = 10; // 一个是声明, 一个是赋值
        }  
        alert( a );
        */
    </script>
</head>

<body>
</body>

</html>			