// 基础函数
function add(x, y) {
    return x + y;
}
var myadd = function (x, y) { return x + y; };
console.log("function1 is: " + add(1, 2));
console.log("function2 is " + myadd);
// ----------------------------------------
// 可选参数和默认参数
var str = "bob";
var str2 = "wang";
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "smith"; }
    return firstName + " and " + lastName;
}
console.log(buildName(str, str2));
// ----------------------------------------
//剩余参数
function saveName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = saveName("Joseph", "2", 2);
console.log(saveName(employeeName));
// this和箭头函数
alert("aaa");
