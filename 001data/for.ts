// for循环

console.log("------------------for循环----------------------");
let testArray = [20, "string", true, "hahaha"];

// 数组从0开始

for (let i = 0; i < testArray.length; i++) {
    console.log(i);
    console.log("数组的值: " + testArray[i]);
}

console.log("-----------------for in循环---------------------");
for (let index in testArray) {
    console.log(index);
    console.log("数组的值: " + testArray[index]);
}

console.log("-----------------for of循环---------------------");
for (let value of testArray) {
    console.log("数组的值: " + value);
}

console.log("----------------forEach循环----------------------");
testArray.forEach((value, index, array) => {
    console.log("value: " + value + "  index: " + index);
});


console.log("----------------every循环----------------------");
testArray.every((value, index, array) => {
    console.log("index：" + index + "--value：" + value);
    return false; //类似于break，跳出当前循环
});


console.log("----------------demo----------------------");
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if(arr[i] == 3) {
        break;
    }
}

for (let item of arr) {
    console.log(item);
    if(item == 3) {
        break;
    }
}

arr.forEach((value, index) => {
    console.log("value: " + value + "  index: " + index);
    if (value == 3) {
        return;
    }
});

