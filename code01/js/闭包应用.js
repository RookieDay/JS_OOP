// 闭包的应用有两个模型
// 1, 实现私有数据
// 2, 实现缓存数据


// 1> 带有缓存功能函数
// var count = 0;
//			var fib = function ( n ) {
//				count++;
//				// 面试求兔子数列, 要求使用 callee
//				if ( n < 0 ) throw new Error( '数字不允许是负数' );
//				if ( n === 0 || n === 1 ) return 1;
//				return arguments.callee( n - 1 ) + 
//						arguments.callee( n - 2 );
//			};
//			
//			var count = 0;
//			for ( var i= 0; i <= 10; i++ ) {
//				count = 0;
//				console.log( fib( i )  + ", " + count + ' 次');
//			}

/*
for ( var i= 0; i <= 10; i++ ) {
	console.log( fib( i ) );
}
*/
// fib( 21 );
// 1, 3, 5, 9, 15, 25
// 41, 67
// console.log( count );


var fib = (function() {
    var arr = [];
    return function(n) {
        // count++;
        // 面试求兔子数列, 要求使用 callee
        if (n < 0) throw new Error('数字不允许是负数');

        var res = arr[n]; // 先到数组中取
        if (res !== undefined) {
            // 数组中有数据
            return res;
        } else {
            // 如果是 1 或 0 则将 1 返回给 res
            // 否则递归结果交给 res;

            if (n === 0 || n === 1) {
                res = 1;
            } else {
                res = arguments.callee(n - 1) +
                    arguments.callee(n - 2);
            }

            arr[n] = res; // 将计算的结果放到数组中, 那么下一次再计算的
            // 时候可以直接拿来用, 就不用计算量
            return res;
        }
    };
})();

fib(5);

// 首先计算 第 n 项
// 在计算的时候首先看缓存中是否有该数据
// 那么如果缓存里面没有数据, 就递归, 并将计算的结果放到对应的缓存位置上
// 那么如果缓存中有数据, 则直接返回



//			var count = 0;
//			for ( var i= 0; i <= 10; i++ ) {
//				count = 0;
//				console.log( fib( i )  + ", " + count + ' 次');
//			}

// fib( 100 );
// 1, 3, 5, 9, 15, 25
// 41, 67
// console.log( count );