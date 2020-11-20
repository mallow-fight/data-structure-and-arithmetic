"use strict";
var _this = this;
var a = {
    c: 1,
    b: function () {
        'use strict';
        console.log(_this.c);
    },
    d: function () {
        'use strict';
        console.log(this);
    }
};
a.b();
a.d();
