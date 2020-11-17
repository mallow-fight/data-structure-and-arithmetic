"use strict";
Function.prototype.myBind = function (otherContext) {
    // 这里的this就是指隐式绑定的上下文，即链式调用的最后一层，即foo
    if (typeof this !== "function") {
        throw new TypeError("调用myBind的必须要是函数");
    }
    var arraySlice = Array.prototype.slice;
    var args = arraySlice.call(arguments, 1);
    function noop() {
    }
    if (this.prototype) {
        noop.prototype = this.prototype;
    }
    args.length = args.length - 1;
    return function () {
        return noop.apply(otherContext, args);
    };
};
function foo(a, b) {
    console.log(this);
    console.log(this.a, a, b);
}
var foo1 = foo.myBind({ a: 1 }, 2, 3);
console.log(foo1());
