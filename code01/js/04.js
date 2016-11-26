	// var Person = function () {};

	function Person() {}

	var p = new Person();

	// 1, 获得对象的构造函数
	var ctr = p.constructor;
	// 2, 将函数转换为字符串
	var s = "" + ctr; // 'function Person () {}'
	// 3, 将 function 与 ( 之间的字符串截取出来
	// alert( s );

	// 3.1 传统的字符串处理函数
	/*
	var start = s.replace("function", "|").indexOf( '|' );
	if ( start != -1 ) {
		var end = s.replace("function", "|").indexOf('(');
		if ( end != -1 ) {
			var name = s.replace("function", "|").slice(start + 2, end);
			alert( "|" + name + "|" );
		}
	}
	*/
	// 找start 和 end
	// if (start != -1 && end != -1) ...

	// string <string>.replace( <string>, <string> )
	// number <string>.indexOf( <string> )
	// string <string>.slice( startIndex, endIndex )


	// 简化1, 将重复的字符串处理合并, 利用一个变量来描述
	// s = s.replace("function", "|");	// '| 名字() {}'
	// 简化2, if 嵌套 if 代码很复杂
	/*
	var start = s.indexOf( '|' );
	if ( start != -1 ) {
		var end = s.indexOf('(');
		if ( end != -1 ) {
			var name = s.slice(start + 2, end);
			alert( "|" + name + "|" );
		}
	}*/

	// 获得开始的索引, 获得结束的索引, 如果索引符合要求, 就获得字符串
	/*
	var start = s.indexOf( '|' );
	var end = s.indexOf('(');
	if ( start != -1 && end != -1 ) {
		var name = s.slice(start + 2, end);
		alert( "|" + name + "|" );				
	}*/


	// 3.2 利用正则表达式
	// 'function Person () {}'
	/*
	var r = /function (.+)\(/;
	var name = r.exec( s )[ 1 ];
	alert( "|" + name + "|" );
	*/

	// 3.3 函数有一个属性, 叫 name 该属性表示函数的名字
	alert(ctr.name); // IE 8 不支持