// 1, 对象都有原型对象, 对象默认继承自原型对象
// 2, 函数被定义后, 默认就有原型属性, 原型属性也是对象
// 3, 函数的原型属性默认继承自 Object.prototype
// 4, 原型对象中 constructor 指向对应的构造函数
// 5, 所有的函数都是 Function 的实例
// 6, 函数也是对象

// 基本的概念
// prototype 是函数的原型属性, 是该函数创建的对象的原型对象
// __proto__ 是对象的原型对象, 是创建该对象的构造函数的 原型属性


function Foo() {}

// Foo 有 prototype 属性
// 讨论 __proto__
// 函数 Foo 是 Function 的实例
// 即 Function 是 Foo 的构造函数
// 类比
//	 Person		p
// => p.__proto__ 就是 Person.prototype
// => Person.prototype.__proto__ 就是 Object.prototype

// 替换
// => Foo.__proto__ 就是 Function.prototype
// => Function.prototype.__proto__ 就是 Object.prototype


// 原型对象就是构造函数的原型属性

// 所以, Foo.__proto__ 就是 构造函数的原型属性, 即 Function.prototype

// 默认函数的原型属性继承自 Object.prototype
// Function 是函数, Function.prototype 是函数的原型属性
// Function.prototype 继承自 Object.prototype


// 这里与之前唯一不同的是将 函数当做对象来看



// 根据结论: Function, 和 函数, 和 Function.prototype 之间的关系, 可以得到
// Array 是 Function 的实例, 继承自 Fucntion.prototype
// Date 是 Function 的实例, 继承自 Fucntion.prototype
// Object 是 Function 的实例, 继承自 Fucntion.prototype
// ...
// Fucntion 是 Function 的实例, 继承自 Fucntion.prototype
// 	结论 Function.__proto__ 就是 Function.prototype


var o = {};
o.name = 'jim';
o.sayHello = function() {};

// 属性与方法有一个特点是和当前对象息息相关的

// 这些与当前对象息息相关的属性与方法就称为实例属性与实例方法


// 那么再函数中, 也可以添加属性与方法
// function Foo() {}
// Foo.name = 'tom';

// 这个属性对于 Foo 的实例来说是全局的, 和个体对象没有关系
// 称这样的属性与方法为 静态属性与静态方法


// 这两组概念在实际使用, 实例成员与对象息息相关, 而静态成员一般
// 作为通用的工具性的成员使用

// $('p').each( function ... );
// $.each()
// jQuery.each( this, fn )