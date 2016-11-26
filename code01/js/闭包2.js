	function func() {
	    var n = Math.random();
	    var m = Math.random();

	    /*return [ 
	    	function () { return n; },
	    	function () { return m; }
	    ];*/
	    return {
	        get_N: function() { return n; },
	        get_M: function() { return m; }
	    };
	}

	// 使用数组实现
	// 获得 n 和 m
	/*
	var fns = func();
			
	var n1 = fns[ 0 ]();
	var m1 = fns[ 1 ]();
	console.log( n1 + ", " + m1 );
			
	var n2 = fns[ 0 ]();
	var m2 = fns[ 1 ]();
	console.log( n2 + ", " + m2 );
			
	var n3 = fns[ 0 ]();
	var m3 = fns[ 1 ]();
	console.log( n3 + ", " + m3 );
	*/


	// 使用对象实现
	var o = func();

	var n = o.get_N();
	var m = o.get_M();


	// 我希望在函数中定义一个变量
	function Foo() {
	    var num;
	}
	// 在调用 Foo 后, 提供两个方法, 分别对
	// num 进行读取, 和 赋值