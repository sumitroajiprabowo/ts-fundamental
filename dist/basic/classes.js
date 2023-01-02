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
class MyManager extends MyEmployee {
    constructor(name, age) {
        super(name, age);
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const manager1 = new MyManager("John Doe", 30);
manager1.greet();
class MyAccount {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}
const account = new MyAccount("John Doe", 30);
console.log(account.name);
account.name = "Jane Doe";
console.log(account.name);
class MyHelper {
    static calculateCircumference(diameter) {
        return this.PI * diameter;
    }
}
MyHelper.PI = 3.14;
console.log(MyHelper.PI);
console.log(MyHelper.calculateCircumference(8));
class MyProject {
    constructor() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    calcBudget() {
        return this.budget * 2;
    }
}
class MyITProject extends MyProject {
    changeName(name) {
        this.projectName = name;
    }
}
let newProject = new MyITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
class OnlyOne {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("The Only One");
        }
        return OnlyOne.instance;
    }
}
let right = OnlyOne.getInstance();
console.log(right.name);
function echo(data) {
    return data;
}
console.log(echo("John Doe"));
function betterEcho(data) {
    return data;
}
console.log(betterEcho("John Doe").length);
const testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
function printAll(args) {
    args.forEach((element) => console.log(element));
}
printAll(["Apple", "Banana"]);
const echo2 = betterEcho;
console.log(echo2("Something"));
//# sourceMappingURL=classes.js.map