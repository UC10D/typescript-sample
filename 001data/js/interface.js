"use strict";
// 接口
console.log('--------接口的初探--------');
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 object' };
console.log(printLabel(myObj));
