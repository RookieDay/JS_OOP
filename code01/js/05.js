// 写一个函数, 获得函数名
/*
function getFnName( fn ) {				
	// 验证传入的一定是函数
	if ( typeof ( fn ) !== 'function' ) return;
	
	// 保证是函数
	if ( fn.name ) {
		return fn.name;
	} else {
		return /function (.+)\(/.exec( fn + '' )[ 1 ];
	}				
}
*/


function getFnName(fn) {
    // 验证传入的一定是函数
    if (typeof(fn) !== 'function') return;
    /*
    return fn.name ? 
    		fn.name :
    		/function (.+)\(/.exec( fn + '' )[ 1 ];
    */
    return fn.name ||
        /function (.+)\(/.exec(fn + '')[1];
}

// 逻辑中断
//	||
//	&&



function PersonChen1234567890() {}
var o = new PersonChen1234567890();

var name = getFnName(o.constructor);

alert(name);