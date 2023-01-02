"use strict";
class DepartmentConstructor {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accounting = new DepartmentConstructor("Accounting");
accounting.describe();
const accountingCopy = { name: "DUMMY", describe: accounting.describe };
accountingCopy.describe();
class DepartmentReadOnly {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const accountingReadOnly = new DepartmentReadOnly("Accounting");
accountingReadOnly.describe();
const accountingReadOnlyCopy = { name: "DUMMY", describe: accountingReadOnly.describe };
accountingReadOnlyCopy.describe();
//# sourceMappingURL=function_keyword.js.map