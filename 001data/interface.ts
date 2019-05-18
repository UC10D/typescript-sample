// 接口

console.log('--------接口的初探--------');

interface LabelledValue {
    label: string;
}

function printLabel (labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label:'Size 10 object'};

console.log(printLabel(myObj));
