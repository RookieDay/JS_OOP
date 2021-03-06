// 原型式继承
// 1, 概念: 对象继承自原型对象: 对象没有的成员, 可以又原型对象提供
// 2, 实现方式
//		-> 动态添加原型对象的成员
//		-> 直接替换原型对象( 如果对类型要求严格需要添加 constructor 属性 )
//		-> 利用 extend 函数给原型对象添加成员

// 经典的继承代码
var o1 = { name: 'tom' };
var o2 = Object.create(o1);

// o2 作为对象, 他的原型对象有谁决定
// o2 的原型对象有构造函数的 prototype 决定
// o2 的原型对象是 o1
// 结论
// o2 的构造函数的 prototype = o1

// o2 有构造函数吗?
// o2 是由 create 函数创建, 那么在函数内部有一个构造函数就可以了
var create1 = function(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}


// 浏览器兼容性的问题
// 1, 直接交给原生对象, 给原生对象提供功能
if (!Object.create) {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    }
}

// 2, 无论是什么浏览器, 都执行通用的方法.
// 在方法中判断是否使用原生方法
function create(obj) {
    if (Object.create) {
        // 判断浏览器是否支持
        return Object.create(obj);
    } else {
        function F() {}
        F.prototype = obj;
        return new F();
    }
}