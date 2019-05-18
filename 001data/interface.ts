// 接口

console.log('--------接口的初探--------');

/* LabelledValue 好比接口的名字, 用来描述上面例子里的要求.
只要传入的对象满足上面的必要条件 有一个叫label并且类型为string的属性. 他就是被允许的
*/
interface LabelledValue {
    label: string;
}

function printLabel (labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label:'Size 10 object'};

printLabel(myObj);

console.log('--------可选属性--------');
interface SquareConfig {
    // 定义一个接口, 其中有两个可选参数 color和width
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig) : {color: string; area: number} {
    let newSquare = {color: 'white', area: 100};
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

let mySquare = createSquare({color: "black", width: 2});
