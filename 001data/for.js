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
    console.log(array);
});
console.log("----------------every循环----------------------");
testArray.every(function (value, index, array) {
    console.log("index：" + index + "--value：" + value);
    return false; //类似于break，跳出当前循环
});
