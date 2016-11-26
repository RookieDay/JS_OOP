function Person() {}
// Person 与 Person.prototype 的关系是什么?


// 结论
// 1, 定义函数, 函数有一个属性叫 prototype
// 2, 函数的属性 prototype 是一个对象类型
//    类似 var o = { name: {} };

// 3, 属性 prototype 是一个含有 constructor 与 __proto__ 属性的对象
//		这个对象就是 Person.prototype

// 4, constructor 属性就是当前函数
//	推论: 函数的 prototype 属性的 constructor 就是当前函数

// 5, 所有的函数的 prototype 属性所表示的对象都继承自 Object.prototype
//	即: 函数.prototype.__proto__ 就是 Object.prototype




function Person() {
    // this.name = 'jim';
}

var p = new Person();

// 1, p 是函数 Person 的实例
// 2, p 就继承自 Person.prototype
//		p.__proto__ 就是 Person.prototype


// 浏览器分析的结论
// 1, 由于构造函数中什么都没有写, 因此 p 中也是什么都没有
// 2, 对象 p 的原型对象 就是 构造函数 Person 的原型属性
//   即: p.__proto__ 就是 Person.prototype

// 经典的 "对象原型和函数三角形" 就出现了

var o = new Object();