"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
        var _this_1 = this;
        this.foo = function () {
            console.log("foo", _this_1.foo, _this_1.baz);
        };
    }
    A.prototype.baz = function () {
        console.log("baz", this.foo, this.baz);
    };
    A.prototype.render = function () {
        console.log("render", this.foo, this.baz);
    };
    A.prototype.testContext = function () {
        var _this_1 = this;
        var _this = this;
        // 箭头函数只能放在正确上下文的同级，或者作为同级函数的参数调用才能取到正确的上下文
        var BB = function () {
            console.log("BB context: ");
            console.log(_this_1);
        };
        function B(ars) {
            var _this_1 = this;
            // 如果直接执行的话，非箭头函数的this取的是B的上下文，即undefined
            // ars是箭头函数就会取B外面的上下文，即A的this
            // 这也是为什么在react中写事件回调的时候要使用箭头函数
            ars();
            // 可强行使用call来绑定上下文，但是原生回调事件中肯定获取不到_this
            ars.call(_this);
            BB();
            var CC = function () {
                console.log(_this_1);
            };
            CC(); // 这个地方取的就是B的上下文，即undefined
        }
        B(function bb() { console.log(this); });
        B(function () { return console.log(_this_1); });
    };
    A.namename = "aaa";
    return A;
}());
var a = new A();
a.foo(); // foo [Function foo] [Function baz]
a.baz(); // baz [Function foo] [Function baz]
a.render(); // render [Function foo] [Function baz]
a.testContext(); // undefined A { foo: [Function] }
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        var _this_1 = _super !== null && _super.apply(this, arguments) || this;
        _this_1.test = function () {
        };
        return _this_1;
    }
    return D;
}(A));
var d = new D();
console.log(d); // D { foo: [Function], test: [Function] }
console.log(d.__proto__.__proto__); // A { baz: [Function], render: [Function], testContext: [Function] }
