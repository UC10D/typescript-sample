class A {
    name: string = 'a';
}

let a: A = new A();

class B {

}

console.log("instanceof ", a instanceof A);
console.log("instanceof ", a instanceof B);