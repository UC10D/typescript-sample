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
        console.log('Animal moved ${distanceInMeters}m.');
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof! woof!");
    }
}

const dog = new Dog();
console.log(dog.move(10));
console.log(dog.bark);
console.log();