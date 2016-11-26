 // 术语:
 // 对象
 // 实例: 一般在描述实例这个概念的时候, 也是指对象. 但是实例一般是用来描述一个由某个构造函数创建的对象
 //		一般称作为 xxx 构造函数的实例
 // 构造函数


 // 实例成员就是 由构造函数创建的对象的成员
 // 静态成员就是 构造函数的成员

 // 一般在使用的时候, 将通用的方法 由 静态成员提供, 实例成员如果要实现该功能, 调用静态成员来实现

 // 
 /*
 function Person() {
 	this.sayHello = function () { alert(' Hello JavaScript '); };
 }
 */
 // Person.name						静态成员, 静态属性
 // new Person().sayHello();			实例成员, 实例方法


 // alert( Person.name );
 // ( new Person ).sayHello();


 // 在 商品案例中
 // 当页面向下滚动的时候动态的加载更多商品
 // 当动态加载商品的时候, 应该考虑如果商品已经在页面中有了, 就不再加载该商品

 // 所以
 // 一把来说, 展示一个商品, 就是展示商品的信息与链接

 // 就在在判断一个对象的所有属性相等, 则为同一件商品

 var data = '[{name:"神器js", price:100, img:"1234567800.jpg"},{name:"神器js", price:100, img:"12345678900.jpg"}]';
 var o = eval("(" + data + ")");
 //			var o1 = o[ 0 ];
 //			var o2 = o[ 1 ];

 // alert( o1 == o2 );

 // 对象都有一个构造函数的东西
 var Goods = function(o) {
     // ...
     for (var k in o) {
         this[k] = o[k];
     }
 }

 var o1 = new Goods(o[0]);
 var o2 = new Goods(o[1]);

 // 要判断是否相同, 就判断每一个属性是否相同
 //			var compare = function ( s1, s2 ) {
 //				return s1.name === s2.name &&
 //						s1.price === s2.price &&
 //						s1.img === s2.img;
 //			};

 // alert( compare( o1, o2 ) );


 // 在项目中, 这种类似的判断可能会很多, 为了便于管理, 该判断是和商品息息相关的. 
 // 因此应该将该方法与该类型绑定在一起, 以便使用与维护
 // 函数也是对象, 也可以利用动态添加成员的办法添加成员

 Goods.compare = function(s1, s2) {
     return s1.name === s2.name &&
         s1.price === s2.price &&
         s1.img === s2.img;
 };


 // alert( Goods.compare( o1, o2 ) );


 // 为了方便调用, 我应该同时保留 静态方法与实例方法
 // 复用
 Goods.prototype.isEqualsTo = function(o) {
     // 比较 this 与 o 是否相等
     return Goods.compare(this, o);
 }

 alert(o1.isEqualsTo(o2));