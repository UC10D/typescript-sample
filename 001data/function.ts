// 基础函数
function add(x: number, y:number): number {
    return x + y;
}

let myadd = function(x,y) {return x + y;};

console.log("function1 is: " + add(1,2));
console.log("function2 is " + myadd);

// ----------------------------------------

// 可选参数和默认参数
let str: string = "bob";
let str2: string = "wang";
function buildName(firstName: string, lastName = "smith") {
    return firstName + " and " + lastName;
}

console.log(buildName(str,str2));

// ----------------------------------------

//剩余参数
function saveName(firstName: string, ...restOfName: any[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
  let employeeName = saveName("Joseph", "2", 2);
  console.log(saveName(employeeName));
