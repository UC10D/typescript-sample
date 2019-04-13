// 类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("-------------------------基础类------------------------");
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
console.log("-------------------------继承------------------------");
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        return "Animal moved " + meters + "m.";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log("Woof! woof!");
    };
    return Dog;
}(Animal));
var dog = new Dog();
console.log(dog.move());
console.log(dog.bark());
console.log("-------------------------复杂继承------------------------");
var AnimalPlus = /** @class */ (function () {
    function AnimalPlus(theName) {
        this.name = theName;
    }
    AnimalPlus.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m.");
    };
    return AnimalPlus;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 35; }
        console.log("Snake's name is " + this.name);
        _super.prototype.move.call(this, meters);
    };
    return Snake;
}(AnimalPlus));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Horse's name is " + this.name);
        _super.prototype.move.call(this, meters);
    };
    return Horse;
}(AnimalPlus));
// 创建对象的两种写法
var sam = new Snake("sam");
var tom = new Horse("tom");
sam.move();
tom.move(34);
console.log("-------------------------公共, 私有与受保护修饰符------------------------");
// 理解protected
console.log("-------------------------readonly修饰符 和 参数属性------------------------");
var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
        //readonly name: string;  //声明时
        this.numberOfLegs = 8;
        //this.name = theName;  //构造函数里
    }
    return Octopus;
}());
var dad = new Octopus("bob");
console.log(dad.name);
// readonly属性必须在声明时或构造函数里被初始化.
console.log("-------------------------取存器------------------------");
var passcode = "123";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "123") {
                this._fullName = newName;
            }
            else {
                console.log("Error");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
