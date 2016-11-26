// 我希望在函数中定义一个变量
//			function Foo() {
//				var num;
//			}
// 在调用 Foo 后, 提供两个方法, 分别对
// num 进行读取, 和 赋值


function Foo() {
    var num;
    return {
        get_Num: function() {
            return num;
        },
        set_Num: function(v) {
            num = v;
        }
    };
}

var o = Foo();

console.log(o.get_Num());

o.set_Num(123);