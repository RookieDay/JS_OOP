			// 1, 函数名.name
			// 2, 函数名.length
			//		形参的数量
			//		与 arguments.length 进行区分

			// function Foo( a, b, c ) {}

			// alert( Foo.length ); // 与函数定义的时候 参数定义的个数

			// 如何判断传入的参数与定义的参数个数一样?
			// 就是 函数名.length === arguments.length


			// 3, 函数名.caller		// 已被废除
			// 	获得调用函数的函数
			//  调用者		主动	
			//	被调用者		被动

			// 如何函数 f 调用了函数 foo
			// f 就是 主动 就是 调用者
			// foo 就是被动的 被调用者

			/*
			function foo () {
				console.log( foo.caller );
			}
			foo();
			
			function f () {
				foo();
			}
			f();
			*/


			// 4, arguments.callee
			// -ee 表示被动的后缀
			// 当前函数的引用
			// 如果函数 foo, 那么函数中 的 arguments.callee 就是表示
			// foo 的引用. 一般在使用的时候就是描述匿名函数的递归表示

			(function() {

			    // 实现递归, 自己调用自己

			})();


			// 5, 补充
			// arguments 是伪数组, 不是数组