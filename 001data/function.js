console.log("----------------基础函数--------------------------");
function add(x, y) {
    return x + y;
}
console.log("basic function is: " + add(1, 2));
console.log("----------------可选参数和默认参数-----------------");
var str1 = "bob";
var str2 = "wang";
function buildName(firstName, lastName) {
    console.log("lastName is " + lastName);
    console.log("type is " + typeof (lastName));
    return firstName + " and " + lastName;
}
console.log(buildName(str1));
// 可选参数为空时, 在函数里的值是 undefined
function buildName2(firstName, lastName) {
    if (firstName === void 0) { firstName = "wang"; }
    return firstName + " and " + lastName;
}
console.log("buildName2 is " + buildName2(undefined, str2));
// 当第一个参数有默认值时, 第一个必须传入undefined才能激活默认值
console.log("----------------剩余参数-------------------------");
function saveName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    // console.log(" testStr " + restOfName.join(" "))
    console.log("saveName1", restOfName[0]);
    console.log("saveName2", restOfName[1]);
    return firstName + " " + restOfName.join(" ");
}
var employeeName = saveName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("saveName3", employeeName[0]);
console.log("saveName4", employeeName[1]);
console.log(saveName(employeeName));
console.log("----------------回调函数-------------------------");
function addNum(callback) {
    callback && callback();
}
function call() {
    console.log('i am call');
}
addNum(call);
// 一般用这种写法
addNum(function () {
    call();
});
