"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        this.payload = [];
    }
    Stack.prototype.size = function () {
        return this.payload.length;
    };
    Stack.prototype.empty = function () {
        return !!this.payload.length;
    };
    Stack.prototype.push = function (target) {
        this.payload.push(target);
    };
    Stack.prototype.pop = function () {
        return this.payload.pop();
    };
    Stack.prototype.display = function () {
        console.log(JSON.stringify(this.payload));
    };
    return Stack;
}());
var stack = new Stack();
stack.display();
stack.push("a");
stack.push("b");
stack.display();
stack.pop();
stack.display();
