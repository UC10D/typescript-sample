console.log("----------------基础函数--------------------------");
function add(x: number, y:number): number {
    return x + y;
}
let myadd = function(x,y) {return x + y;};

console.log("basic function is: " + add(1,2));
console.log("anonymous function is " + myadd);
console.log("anonymous function is " + myadd(2,3));


console.log("----------------可选参数和默认参数-----------------");
let str1: string = "bob";
let str2: string = "wang";

function buildName(firstName: string, lastName? : string) {
    console.log("lastName is " + lastName);
    console.log("type is " + typeof(lastName));
    return firstName + " and " + lastName;
}
console.log(buildName(str1));
// 可选参数为空时, 在函数里的值是 undefined

function buildName2(firstName = "wang", lastName : string) {
    return firstName + " and " + lastName;
}
console.log("buildName2 is " + buildName2(undefined,str2));
// 当第一个参数有默认值时, 第一个必须传入undefined才能激活默认值


console.log("----------------剩余参数-------------------------");
function saveName(firstName: string, ...restOfName: string[]) {
    console.log(" testStr " + restOfName.join(" "))
    return firstName + " " + restOfName.join(" ");
  }
  
  let employeeName = saveName("Joseph", "Samuel", "Lucas", "MacKinzie");
  console.log(saveName(employeeName));
