< script id = "engin" >
    /*
			 
		 		var total = 0, 
					args = arguments, 
					len = args.length;
				for ( var i = 0; i < len; i++ ) {
					total += args[ i ];
				}
				return total;
		 	
		 	
		 	*/
    <
    /script> <
script >

    var getBody = function(id) {
        var script = document.getElementById(id);
        var body = script.innerHTML.replace('/*', '').replace('*/', '');
        script.parentNode.removeChild(script);
        return body;
    }


onload = function() {


    var fnSum = new Function(getBody('engin'));

    var res = fnSum(1, 2, 3);

    alert(res);

};


<
/script>



// 使用 Function 和 使用 eval
// 他们都有一个共同 的特点, 可以将字符串作为 js 代码来执行

// eval 函数的语法
// eval( 字符串 )
// 这个函数在调用的时候会将字符串作为 js 代码来执行

// var a = 10;
// eval( 'var a = 10;' );

// console.log( a );


// 应用方向比较的广泛, 可以利用该方法实现动态操作
// 1, ajax
//	服务器与浏览器交互, 服务器发给浏览器的数据是一个字符串
//	那么要执行这个代码, 就需要将字符串作为 代码执行, 这个就要用到 eval

var str = '{ name: "jim", age: 19, gender: "男" }';
// '[{{}},{{},[]}]'
// 当从服务器拿到字符串以后, 理论上应该将其作为数据对象使用
// 解析字符串
// 传统的做法
/*
str = str.replace('{', "").replace("}", "");
// ' name: "jim", age: 19, gender: "男" '
var arr = str.split( ',' );
// [ ' name: "jim"', ' age: 19', ' gender: "男" ' ]
			
var o = {};
for ( var k in arr ) {
	var tempArr = arr[ k ].split( ':' );
	
	// 去空格
	var key = tempArr[ 0 ].trim();
	var value = tempArr[ 1 ].trim();
	
	o[ key ] = value;
	
}
			
			
console.log( o.name );
console.log( o.age );
console.log( o.gender );
*/

var o1 = {};

// var o2 = eval( "(" + str + ")" );

var o2 = eval(str);

console.log(o2.name);
console.log(o2.age);
console.log(o2.gender);


// 2, 所见即所得的案例( 难度 )



// Function 和 eval 都可以实现字符串执行代码
// 在实际开发中, 如果考虑效率可以直接使用 eval
// 但是考虑安全性则建议使用 Function

// eval( 'var a = 10;' );  // eval 会污染全局变量

// eval 等价与
// 直接实行 var a = 10;


// (new Function( 'var a = 10; alert( 123 );' ))();
// new Fucntion 等价于
// 定义一个函数, 在函数内部, 执行
// var a = 10;

// console.log( a );


var str = '{ name: "tom" }';
var o = (new Function('return ' + str))();
//			var o = (new Function( str ))(); 报错，name is not defined，因为无返回值
alert(o.name);