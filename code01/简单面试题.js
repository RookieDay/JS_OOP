 var length = 10;

 function fn() {
     console.log(this.length);
 }
 var obj = {
     length: 5,
     method: function(fn) {
         fn();
         // arguments[0].call(this);
         arguments[0]();
     }
 }
 obj.method(fn); //10 1

 //****************************
 var scope = 'global';

 function log() {
     var args = Array.prototype.join.call(arguments, ', ');
     console.log(this.scope + ':' + args);
 }
 var dog = {
     scope: 'dog',
     yelp: function() {
         var scope = 'dog.yelp';
         log('wow');
     }
 };
 dog.yelp();
 //global:wow
 //
 dog.yelp.apply(dog);
 //dog.yelp:wow ---?
 log.call(dog, 'created');
 //dog:created


 function Foo() {
     var num;
     var o = { num: num };
     num = o.num;
     return function() {
         return o;
     };
 }
 var fn1 = Foo();
 var get1 = fn().num;
 console.log(get1); //undefined
 fn().num = '123';
 var get2 = fn1().num;
 console.log(get2); //123


 //		var a = 1;
 //		   
 //		function a(){
 //			a = 1
 //		}
 //		a()
 //		console.log(a)  

 //  类似下面的处理
 //  var a;
 // 		function a(){
 // 			a = 1
 // 		}

 // 		a = 1;

 // 		// a()
 // 		console.log(a)

 //  var num = 123;

 //  function f1() {
 //      console.log(num);
 //  }

 //  function f2() {
 //      var num = 456;
 //      f1();
 //  }

 //  f2(); // 123

 //  var num = 123;

 //  function f1(num) {
 //      console.log(num);
 //  }

 //  function f2() {
 //      var num = 456;
 //      f1(num);
 //  }

 //  f2(); //456


 //  var num = 123;

 // 			function f1(  ) {
 // 				console.log( num );
 // 			}

 // 			function f2() {
 // 				num = 456;
 // 				f1(  );
 // 			}

 // 			f2(); 456
 // 			console.log( num );456



 //	(function (a) {
 //      console.log(a);
 //      var a = 10;
 //      function a(){}
 //  }( 100 ));




 //  (function(a11) {
 //      function a11() {}


 //      console.log(a11 + '');
 //      a11 = 10;

 //  }(100));


 var foo = 1;

 function fn() {
     foo = 10;

     function foo() {}
 }
 fn();
 alert(foo); //1