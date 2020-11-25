"use strict";
function debounce(fn, delay) {
    if (delay === void 0) { delay = 1000; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(void 0, args);
        }, delay);
    };
}
var bz = debounce(function (a, b, c) {
    console.log(a, b, c);
}, 1000);
bz(1, 2, 3);
function throttle(fn, limit) {
    if (limit === void 0) { limit = 1000; }
    var lockTimer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!lockTimer) {
            fn.apply(void 0, args);
            lockTimer = setTimeout(function () {
                lockTimer = null;
            }, limit);
        }
    };
}
var bt = throttle(function (a, b) {
    console.log(a, b);
}, 3000);
setInterval(function () {
    bt(3, 4);
}, 1000);
