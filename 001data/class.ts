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