// 类

console.log("-------------------------基础类------------------------");

class Greeter {
    greeting: string;
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
    move(distanceInMeters: number = 0) {

    }
}