function foo() {
    var num = Math.random();
    // return num;
    return function() {
        return num;
    }
}

var fn = foo();
var r1 = fn();
var r2 = fn();
// fn 是一个在函数内定义的函数, 俺么在执行的时候可以访问到上一级作用域中的 num
// 因此在最外面, 就可以间接的访问 num 了
alert(r1 + '\n' + r2);