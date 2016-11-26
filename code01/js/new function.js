// 创建函数
// 1, 声明式

// 2, 表达式

// 3, new Function

// 结论: 任意函数都是 Function 的实例
/*
console.log( Array instanceof Function );
function PeSoN() {}
console.log( PeSoN instanceof Function );
console.log( Date instanceof Function );
console.log( Object instanceof Function );
			
// Function 也是函数
console.log( Function instanceof Function );
*/


// new Function 的语法规则
// 语法
// var 函数名 = new Function( arg1, arg2, arg3, ..., argN, body );
// 解释
// 	Function 构造函数所有的参数都是字符串类型的
//	除了最后一个参数, 所有的参数都作为生成函数的参数. 这里可以没有参数
//	最后一个参数也是字符串, 表示的是生成函数的函数体

/*
function max( a, b )  {
	return a > b ? a : b;
}
			
var fnMax = new Function( 'a', 'b', 'return a > b ? a : b;' );
			
var res = fnMax( 1, 2 );
*/

// 写一个函数, 求传入数字的和
// 1, 有两个参数的时候
/*
function sum( a, b ) {
	return a + b;
}
var fnSum = new Function( 'a', 'b', 'return a + b;' );
			
var res = fnSum( 123, 456 );
alert( res );
*/

// 2, 多个参数的时候
/*
function sum() {
	var total = 0, 
		args = arguments, 
		len = args.length;
	for ( var i = 0; i < len; i++ ) {
		total += args[ i ];
	}
	return total;
}
			
var res = sum( 1, 2, 3, 4, 5 );
alert( res );
*/

// new Function
/*
var fnSum = new Function( 'var total = 0, args = arguments, len = args.length;for ( var i = 0; i < len; i++ ) {total += args[ i ];}return total;' );
			
var res = fnSum( -1, 1,1,1,1,1,1 );
alert ( res );
*/

// 解决这个问题比较晦涩, 代码难以维护
// 给出两个解决方案
// 1, 传统
// 将字符串进行换行分割
var fnSum = new Function(
    'var total = 0, ' +
    '	args = arguments, ' +
    '	len = args.length; ' +
    'for ( var i = 0; i < len; i++ ) { ' +
    '	total += args[ i ]; ' +
    '} ' +
    'return total; '
);
var res = fnSum(1, 1, 1, 1, 1, 1);
alert(res);


// 2, 吸收了 MVC 的思想( 不做要求 )