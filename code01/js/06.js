function getFnName(fn) {

    return typeof fn !== 'function' ?
        undefined :
        fn.name ||
        /function (.+)\(/.exec(fn + '')[1]

}

function nameDaStudent() {}
var o = new nameDaStudent();

var name = getFnName(o.constructor);

alert(name);
var name1 = getFnName(nameDaStudent);
alert(name1);