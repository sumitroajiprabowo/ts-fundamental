"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
class MyClass extends Student {
    constructor(name, age) {
        super(name, age);
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const myClass = new MyClass("John Doe", 30);
myClass.greet();
//# sourceMappingURL=inheritance.js.map