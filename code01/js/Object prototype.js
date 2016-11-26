// Object 原型中的常用方法
// 1, 带有下划线的除了 __proto__ 其他可以不考虑
// 2, constructor 是构造函数的引用, 就是构造函数
/*
var Person = function () {
	this.name = 'jim';
};
var p1 = new Person();
var p2 = new Person.prototype.constructor();
			
Person.prototype.init = Person;
// initial 初始化的
var p3 = new Person.prototype.init();
*/


// 3, hasOwnProperty
// 	has	有
//	own	自己的
// 	property 属性
// 有自己的属性, 检查属性是否是自己原生提供的, 如果是被继承的 则返回 false
// 语法
// boolean 对象.hasOwnProperty( 属性名字 )

/*
var o = { name: 'jim' };
function Person() {
	this.name = 'tom';
}
Person.prototype = o;
			
var p = new Person();
			
console.log( p.name );
			
var isTrue = p.hasOwnProperty( 'name' );
console.log( isTrue );
*/


// 4, isPrototypeOf
// of 的
// 语法:
// boolean 对象1.isPrototypeOf( 对象2 );
// 判断 对象1 是否为 对象2 的原型对象, 如果是返回 true, 否则返回 false

// var Person = function () {};
// var p = new Person();

/*
console.log( p.isPrototypeOf( Person ) );
console.log( p.isPrototypeOf( Person.prototype ) );
			
console.log( Person.prototype.isPrototypeOf( p ) );
			
console.log( Person.prototype.isPrototypeOf( Person ) );
*/

/*
var o = {};
// Person.prototype = o;
var p = new Person();
Person.prototype = o;
alert( o.isPrototypeOf( p ) );
*/


// 5, propertyIsEnumerable
// -able	表示可能性的后缀
// enum		枚举, 一个一个的展示出来
// 属性是否可以枚举, 属性是否可以被 for-in 遍历到
// var o = {};
// in
// alert( 'hasOwnProperty' in o );  // o.hasOwnProperty
// for ( var k in o ) {
//	console.log( k );
// }

// 这个方法判断属性是否可以被枚举, 同时判断属性是否是自己提供的
// 因此该方法表示判断属性必须是 自己提供的, 同时可以被枚举的, 那么就返回 true, 否则返回 false
// 在 ES3 的基础上, 该方法没有任何意义, 是对 hsOwnProperty 的一个升级版
// 在 ES5 中引入了 对象特性( attribute )的概念, 才会使得该方法有点作用

// 语法:
// boolean 对象.propertyIsEnumberable( 属性名字 );
/*
var o = { name: 'jim' };
o.__proto__.age = 10;
console.log( o.age );
console.log( o.propertyIsEnumerable( 'name' ) );
console.log( o.propertyIsEnumerable( 'age' ) );
*/


// 6, toString, toLocaleString, valueOf
/*
var d = new Date();
console.log( d.toString() );
console.log( d.toLocaleString() );
*/

function Person() {
    /*
    this.toString = function () {
    	return 'toString 字符串';
    }
    this.toLocaleString = function () {
    	return '本地字符串';
    }
    */
}
var d = new Person();

console.log(d.toString());
console.log(d.toLocaleString());


// console.log( (new Number(1)).toString() );
// console.log( (new Number(1)).toLocaleString() );


// 借用方法
// console.log( Object.prototype.toString.call( 1 ) );
// console.log( toLocaleString.call( 1 ) );


// console.log( Object.prototype.toString.call( new Date() ) );

/*
var o = {};
if ( !!o ) {
	console.log( 1 );
}
*/

// var a = [ 1, 2, 3 ];
// alert( a.valueOf() );