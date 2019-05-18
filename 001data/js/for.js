"use strict";
// for循环
console.log("------------------for循环----------------------");
var testArray = [20, "string", true, "hahaha"];
// 数组从0开始
for (var i = 0; i < testArray.length; i++) {
    console.log(i);
    console.log("数组的值: " + testArray[i]);
}
console.log("-----------------for in循环---------------------");
for (var index in testArray) {
    console.log(index);
    console.log("数组的值: " + testArray[index]);
}
console.log("-----------------for of循环---------------------");
for (var _i = 0, testArray_1 = testArray; _i < testArray_1.length; _i++) {
    var value = testArray_1[_i];
    console.log("数组的值: " + value);
}
console.log("----------------forEach循环----------------------");
testArray.forEach(function (value, index, array) {
    console.log("value: " + value + "  index: " + index);
});
console.log("----------------every循环----------------------");
testArray.every(function (value, index, array) {
    console.log("index：" + index + "--value：" + value);
    return false; //类似于break，跳出当前循环
});
console.log("----------------demo----------------------");
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 3) {
        break;
    }
}
for (var index in arr) {
    console.log("index " + index);
    console.log(typeof (index));
    if (index == "1") {
        console.log();
    }
}
for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
    var item = arr_1[_a];
    console.log(item);
    if (item == 3) {
        break;
    }
}
arr.forEach(function (value, index) {
    console.log("value: " + value + "  index: " + index);
    if (value == 3) {
        return;
    }
});
console.log("----------some---------");
// let list3 = [1, 2, 3, 4, 5, 6];
// list3.some((value, index) => {
//     if (value == 3) {
//         return true;
//     }
//     console.log(value);
// });
// console.log("--------every----------");
// list3.every((value, index) => {
//     if (value == 3) {
//         console.log("index: " + index);
//         return false;
//     }
//     console.log(value);
// });
