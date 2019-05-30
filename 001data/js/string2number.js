"use strict";
// 1
var a = "1";
var t1 = new Date().getTime();
for (var i = 0; i < 999999; i++) {
    a * 1;
    // console.log(a * 1);
}
var t2 = new Date().getTime();
console.log("1:", t2 - t1);
// parseInt
var b = "1";
var t3 = new Date().getTime();
for (var i = 0; i < 999999; i++) {
    // console.log(parseInt(a));
    parseInt(b);
}
var t4 = new Date().getTime();
console.log("2:", t4 - t3);
// Number()
var c = "1";
var t5 = new Date().getTime();
for (var i = 0; i < 999999; i++) {
    // console.log(parseInt(a));
    Number(c);
}
var t6 = new Date().getTime();
console.log("3:", t6 - t5);
