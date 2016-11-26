			// 面向对象的特征就是 封装性, 继承性 和 多态性
			// 封装: 就是将复杂包裹, 隐藏起来, 让简单的东西预留在外面
			// 继承: 拿来主义, 自己没有, 把别人的拿过来, 让其成为自己的

			// 在 js 中有两种继承模型
			// 1, 原型继承
			// 2, 组合继承

			// 1, 原型继承
			// 如果需要让一个对象有某一个行为( 属性, 方法 ), 那么可以考虑将这个行为
			//	加到原型对象中, 那么这个对象就继承自原型对象, 获得了该行为

			// 2, 组合式继承
			// 组合式继承将其他的对象中的成员加到自己身上
			var o1 = { name: 'jim', age: 19, gender: '男' };
			var o2 = {
			    score: {
			        math: 100,
			        english: 90,
			        chinese: 120
			    }
			};
			// 让 o2 继承自 o1
			// 将 o1 的成员加到 o2 上
			//			for ( var k in o1 ) {
			//				o2[ k ] = o1[ k ];
			//			}

			// 由于 for in 循环中的对象可以随意的替代, 因此 o2 可以继承自任意的对象
			// 因此, 这个继承方法称为组合式继承
			// 这里希望 o2 可以继承自任意的对象. 所以为了简化继承的代码
			// 给 o2 提供一个方法, 叫 extend
			o2.extend = function(obj) {
			    for (var k in obj) {
			        this[k] = obj[k];
			    }
			}

			o2.extend(o1); // 继承

			o2.extend({
			    id: function(id) {

			    },
			    tag: function(tag) {

			    },
			    showErr: function(msg) {
			        throw new Error(msg);
			    }
			});