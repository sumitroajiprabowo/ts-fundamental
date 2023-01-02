"use strict";
class DepartmentPrivate {
    constructor(n) {
        this.employee = [];
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
const accountingDescription = new DepartmentPrivate("Accounting");
accountingDescription.describe();
accountingDescription.addEmployee("Dawu");
accountingDescription.addEmployee("Merdeka");
accountingDescription.printEmployeeInformation();
class DepartmentPublic {
    constructor(n) {
        this.employee = [];
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
const accountingPublic = new DepartmentPublic("Accounting");
accountingPublic.name = "Development";
accountingPublic.describe();
accountingPublic.addEmployee("Dawu");
accountingPublic.addEmployee("Merdeka");
accountingPublic.employee[2] = "Dawu Merdeka";
accountingPublic.printEmployeeInformation();
class DepartmentProtected {
    constructor(n) {
        this.employee = [];
        this.name = n;
    }
    addEmployee(employee) {
        this.employee.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employee.length);
        console.log(this.employee);
    }
}
class ITDepartment extends DepartmentProtected {
    constructor(id, admins) {
        super(id);
        this.admins = admins;
    }
}
const it = new ITDepartment("d1", ["Zaenal"]);
it.addEmployee("Zaenal");
it.addEmployee("Abidin");
it.printEmployeeInformation();
//# sourceMappingURL=access_modifier.js.map