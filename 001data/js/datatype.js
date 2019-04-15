"use strict";
// 数据类型
// undefined
console.log("--------------------undefined----------------------------");
var un;
console.log("typeof(un) is " + typeof (un));
console.log("un valuse is " + un);
if (un) {
    console.log("un is true");
}
else {
    console.log("un is false");
}
var nu = null;
console.log("typeof(nu) is " + typeof (nu));
console.log("nu valuse is " + nu);
if (nu) {
    console.log("nu is true");
}
else {
    console.log("nu is false");
}
// 只声明, 未赋值, type 为undefined, is false
// null 为obj, is false
console.log("--------------------any----------------------------");
// any
var an = 0;
console.log("typeof (an) is " + typeof (an));
console.log("an valuse is " + an);
an = '111';
console.log("typeof (an) is " + typeof (an));
console.log("an valuse is " + an);
// any 的类型会改变, 需要注意
console.log("--------------------number----------------------------");
// number
var num = 0;
console.log("typeof (num) is " + typeof (num));
console.log("num valuse is " + num);
if (num) {
    console.log(" 0 is true ");
}
else {
    console.log(" 0 is false ");
}
num = 1;
if (num) {
    console.log(" 1 is true ");
}
else {
    console.log(" 1 is false ");
}
// 未赋值通undefined, null 和 0 is false
console.log("--------------------string----------------------------");
// string
var str = '';
console.log("typeof ('') is " + typeof (str));
console.log("'' valuse is " + str);
console.log("'' length is " + str.length);
if (str) {
    console.log("'' is true");
}
else {
    console.log("'' is false");
}
str = ' ';
console.log("typeof (' ') is " + typeof (str));
console.log("' ' valuse is " + str);
console.log("' ' length is " + str.length);
if (str) {
    console.log("' ' is true");
}
else {
    console.log("' ' is false");
}
// length 为0时 is false
