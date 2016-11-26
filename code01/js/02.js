        // 对象中有一个属性 叫 __proto__
        // 通过调试可以发现 对象的 __proto__ 与创建它的构造函数的 prototype 是一个东西

        function F() {}
        var o = new F();

        console.log(o.__proto__ === F.prototype);

        // __proto__ 是非标准属性

        // 原型

        // F.prototype			原型属性
        // o.__proto__			原型对象

        // F.prototype 是构造函数 F 的原型属性
        // F.prototype 是对象 o 的原型对象

        // 在访问一个对象的属性的时候, 首先在当前对象中找, 如果没有在其原型对象中找


        var fn1 = function() {};
        var fn2 = function() {};

        var f1 = new fn1();

        // fn1.prototype 是 f1 的原型对象   一个对象的原型对象只和创建这个对象的构造函数有关