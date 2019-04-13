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
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(meters: number = 0) {
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

let sam = new Snake("sam");
let tom: AnimalPlus = new Horse("tom");

sam.move();
tom.move(34);