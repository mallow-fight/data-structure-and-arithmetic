"use strict";
var SingleNode = /** @class */ (function () {
    function SingleNode(value) {
        this.value = value;
    }
    return SingleNode;
}());
var List = /** @class */ (function () {
    function List() {
        this.defaultHead = {
            value: "head",
            next: undefined,
            perv: undefined,
        };
        this.head = this.defaultHead;
    }
    List.prototype.setHead = function (head) {
        this.head = new SingleNode(head);
    };
    List.prototype.clear = function () {
        this.head = this.defaultHead;
    };
    List.prototype.insertAfter = function (target, element) {
        var _a, _b;
        this.current = this.head;
        while (((_a = this.current) === null || _a === void 0 ? void 0 : _a.value) !== target) {
            this.current = (_b = this.current) === null || _b === void 0 ? void 0 : _b.next;
        }
        var beforeNext = this.current.next;
        this.current.next = new SingleNode(element);
        this.current.next.perv = this.current;
        if (beforeNext) {
            this.current.next.next = beforeNext;
        }
        else {
            this.current.next.next = this.head;
        }
    };
    List.prototype.delete = function (target) {
        var _a, _b;
        this.current = this.head;
        while (((_a = this.current) === null || _a === void 0 ? void 0 : _a.value) !== target) {
            this.current = (_b = this.current) === null || _b === void 0 ? void 0 : _b.next;
        }
        this.current.perv.next = this.current.next;
        this.current.next.perv = this.current.perv;
        this.current = undefined;
    };
    List.prototype.display = function (order) {
        var _a, _b;
        var payload = [];
        this.current = this.head;
        while (((_a = this.current) === null || _a === void 0 ? void 0 : _a.value) && payload.length < 100) {
            payload.push(this.current);
            this.current = (_b = this.current) === null || _b === void 0 ? void 0 : _b.next;
        }
        console.log(order, payload);
        return payload;
    };
    List.prototype.copy = function () {
        var head = this.head;
        var payload = {};
        while (head.value) {
            payload.value = head.value;
            payload.next = head.next;
            payload.perv = head.perv;
            if (head.next) {
                head = head.next;
            }
        }
        return payload;
    };
    return List;
}());
var list = new List();
var headNode = "a";
var node1 = "b";
var node2 = "c";
var node3 = "d";
var node4 = "e";
var node5 = "f";
list.setHead(headNode);
list.insertAfter(headNode, node1);
list.insertAfter(node1, node2);
list.display("1");
list.delete(node1);
list.display("2");
