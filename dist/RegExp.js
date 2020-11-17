"use strict";
function SecretPhone(phone) {
    return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
var secretPhone = SecretPhone("17312345678");
console.log(secretPhone);
function getVarsType(vars) {
    return Object.prototype.toString.call(vars).replace(/\[\w+\s(\w+)\]/, "$1").toLowerCase();
}
console.log(getVarsType(0)); // number
console.log(getVarsType("1")); // string
console.log(getVarsType(null)); // null
console.log(getVarsType(undefined)); // undefined
console.log(getVarsType(false)); // boolean
console.log(getVarsType(/1/)); // regexp
console.log(getVarsType(Symbol("a"))); // symbol
console.log(getVarsType(function () { })); // function
console.log(getVarsType({})); // object
function onlyNumber(input) {
    return /^[\d]+$/.test(input || "");
}
console.log(onlyNumber("123")); // true
console.log(onlyNumber("124 b")); // false
console.log(onlyNumber("a123")); // false
console.log(onlyNumber("1a3")); // false
function onlyNumberOrLetter(input) {
    return /^(\d|[a-z]|[A-Z])+$/.test(input || "");
}
console.log(onlyNumberOrLetter("a123c")); // true
console.log(onlyNumberOrLetter("A12C")); // true
console.log(onlyNumberOrLetter("1234")); // true
console.log(onlyNumberOrLetter("_4324hkhk")); // false
