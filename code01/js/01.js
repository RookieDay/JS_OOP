// jq 创建一个 p 标签
/*
        $( '<p>我是一个自然段</p>' ).appendTo( 'body' );
			
        // 传统
        var p = document.createElement( 'p' );
        var txt = document.createTextNode( '...' );
        p.appendChild( txt );
			
        document.body.appendChild( p );
        */


//			function tag( name ) {
//				return document.getElementsByTagName( name );
//			}
//			function addStyle( node, style ) {
//				// 要将 style 中是所有样式加到 node 的 style 属性上
//				for ( var k in style ) {
//					node.style[ k ] = style[ k ];
//				}
//			}
//			
//			onload = function () {
//				/*
//				// 1 获得元素
////				var divNode = document.getElementsByTagName( 'div' )[ 0 ];
////				var pNode = document.getElementsByTagName( 'p' )[ 0 ];
////				
//
//
////				var divNode = tag( 'div' )[ 0 ];
////				var pNode = tag( 'p' )[ 0 ];
////				// 2设置 style 属性
////				// node.style.border = "";
////				// background-color -> backgroundColor
////				divNode.style.border = "1px solid red";
////				pNode.style.border = "1px solid green";
//*/
//				
//				var divNode = tag( 'div' )[ 0 ];
//				var pNode = tag( 'p' )[ 0 ];
//				
//				addStyle( divNode, {
//					"border": "1px solid red"
//				} );
//				
//			};











// 重新优化
// id, cName
//			function tag( name, array ) {
//				array = array || [];
//				[].push.apply( array, document.getElementsByTagName( name ));
//				// 将 doc*byTag* 获得的元素以数组的形式存到 array 中
//				
//				return array;
//			}
//			function addStyle( nodes, style ) {
//				// 要将 style 中是所有样式加到 node 的 style 属性上
//				for ( var i = 0; i < nodes.length; i++ ) {
//					for ( var k in style ) {
//						nodes[ i ].style[ k ] = style[ k ];
//					}
//				}
//			}


var $ = {
    tag: function(name, array) {
        array = array || [];
        [].push.apply(array, document.getElementsByTagName(name));
        // 将 doc*byTag* 获得的元素以数组的形式存到 array 中

        return array;
    },
    addStyle: function(nodes, styles) {
        // 要将 style 中是所有样式加到 node 的 style 属性上
        for (var i = 0; i < nodes.length; i++) {
            for (var k in style) {
                nodes[i].style[k] = styles[k];
            }
        }
    }
};
onload = function() {

    var arr = $.tag('div');
    arr = $.tag('p', arr);

    $.addStyle(arr, {
        "border": "1px solid red"
    });

};