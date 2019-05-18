// 类

console.log("-------------------------基础类------------------------");

class Greeter {
    public greeting: string;
    constructor(message: string) {
        this.greeting = message
    }
    public greet(): string {
        return "Hello " + this.greeting;
    }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

console.log("-------------------------继承------------------------");
class Animal {
    move(meters: number = 0): string {
        return `Animal moved ${meters}m.`
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof! woof!");
    }
}

const dog = new Dog();
console.log(dog.move());
console.log(dog.bark());

console.log("-------------------------复杂继承------------------------");
class AnimalPlus {
    public name: string;
    public constructor(theName: string) { this.name = theName; }
    public move(meters: number = 0) {
        console.log(`${this.name} moved ${meters}m.`)
    }
}

class Snake extends AnimalPlus {
    constructor(name: string) { super(name); }
    move(meters: number = 35): void {
        console.log("Snake's name is " + this.name);
        super.move(meters)
    }
}

class Horse extends AnimalPlus {
    constructor(name: string) { super(name); }
    move(meters: number = 45) {
        console.log("Horse's name is " + this.name);
        super.move(meters);
    }
}

// 创建对象的两种写法
let sam = new Snake("sam");
let tom: AnimalPlus = new Horse("tom");

sam.move();
tom.move(34);

console.log("-------------------------公共, 私有与受保护修饰符------------------------");
// 理解protected

console.log("-------------------------readonly修饰符 和 参数属性------------------------");
class Octopus {
    //readonly name: string;  //声明时
    readonly numberOfLegs: number = 8;
    constructor (readonly name: string) {
        //this.name = theName;  //构造函数里
    }
}
let dad = new Octopus("bob");
console.log(dad.name);

// readonly属性必须在声明时或构造函数里被初始化.

console.log("-------------------------取存器------------------------");
let passcode = "123"

// class Employee {
//     private _fullName: string;

//     get fullName():string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "123") {
//             this._fullName = newName;
//         } else {
//             console.log("Error");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
