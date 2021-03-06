"use strict";
var Queen = /** @class */ (function () {
    function Queen(width) {
        // 行号，列号
        this.field = [];
        this.stack = [];
        for (var i = 0; i < width; i++) {
            for (var j_1 = 0; j_1 < width; j_1++) {
                this.field.push([i, j_1]);
            }
        }
    }
    Queen.prototype.explore = function (start) {
        if (start === void 0) { start = this.field[0]; }
        this.stack.push(start);
    };
    Queen.prototype.display = function () {
        console.log(this.field);
    };
    return Queen;
}());
var queen = new Queen(4);
queen.display();
