"use strict";
var A = /** @class */ (function () {
    function A() {
        this.name = 'a';
    }
    return A;
}());
var a = new A();
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
console.log("instanceof ", a instanceof A);
console.log("instanceof ", a instanceof B);
