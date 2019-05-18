"use strict";
// 接口
console.log('--------接口的初探--------');
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 object' };
printLabel(myObj);
console.log('--------可选属性--------');
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
        console.log(newSquare.color);
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
        console.log(newSquare.area);
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black", width: 2 });
