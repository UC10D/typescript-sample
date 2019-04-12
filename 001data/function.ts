console.log("----------------基础函数--------------------------");
function add(x: number, y: number): number {
    return x + y;
}

console.log("basic function is: " + add(1, 2));

console.log("----------------可选参数和默认参数-----------------");
let str1: string = "bob";
let str2: string = "wang";

function buildName(firstName: string, lastName?: string): string {
    console.log("lastName is " + lastName);
    console.log("type is " + typeof (lastName));
    return firstName + " and " + lastName;
}
console.log(buildName(str1));
// 可选参数为空时, 在函数里的值是 undefined

function buildName2(firstName = "wang", lastName: string): string {
    return firstName + " and " + lastName;
}
console.log("buildName2 is " + buildName2(undefined, str2));
// 当第一个参数有默认值时, 第一个必须传入undefined才能激活默认值


console.log("----------------剩余参数-------------------------");
function saveName(firstName: string, ...restOfName: string[]): string {
    // console.log(" testStr " + restOfName.join(" "))
    console.log("saveName1", restOfName[0]);
    console.log("saveName2", restOfName[1]);
    return firstName + " " + restOfName.join(" ");
}

let employeeName = saveName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log("saveName3", employeeName[0]);
console.log("saveName4", employeeName[1]);
console.log(saveName(employeeName));

console.log("----------------回调函数-------------------------");
function addNum(callback: () => any): void {
    callback && callback();
}

function call(): void {
    console.log('i am call');
}

addNum(call);

// 一般用这种写法
addNum(() => {
    call();
});
