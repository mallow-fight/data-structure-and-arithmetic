"use strict";
function Test() {
    var i = 1;
    while (true) {
        i++;
        console.log("excute");
        if (i === 10) {
            return "hehe";
        }
    }
}
console.log(Test());
var j = 1;
while (true) {
    j++;
    console.log("excute1");
    if (j === 10) {
        return;
    }
}
