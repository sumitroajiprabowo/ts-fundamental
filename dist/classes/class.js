"use strict";
class MyEmployee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const employee1 = new MyEmployee("John Doe", 30);
employee1.greet();
//# sourceMappingURL=class.js.map