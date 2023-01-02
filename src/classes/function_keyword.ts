class DepartmentConstructor { // Class constructor function and keyword name = "Default Department"; // Property name: string; // Property
    name: string;
    constructor(n: string) {
        this.name = n;
    }

    describe() { // Method
        console.log(`Department: ${this.name}`); // Template literal
    }
}

const accounting = new DepartmentConstructor("Accounting"); // Object
accounting.describe(); // Method call

const accountingCopy = { name: "DUMMY", describe: accounting.describe }; // Object literal with method reference
accountingCopy.describe(); // Method call on object literal

// Output:
// Department: Accounting


// Path: src/classes/readonly_modifier.ts
// Compare this snippet from src/classes/readonly_modifier.ts:
// class Department {
//     name: string;
//     constructor(n: string) {
//         this.name = n;
//     }
//
//     describe(this: Department) {
//         console.log(`Department: ${this.name}`);
//     }
// }
//

class DepartmentReadOnly {
    readonly name: string;
    constructor(n: string) {
        this.name = n;
    }

    describe(this: DepartmentReadOnly) {
        console.log(`Department: ${this.name}`);
    }
}

const accountingReadOnly = new DepartmentReadOnly("Accounting");
accountingReadOnly.describe();

// Output:
// Department: Accounting

const accountingReadOnlyCopy = { name: "DUMMY", describe: accountingReadOnly.describe }; // Object literal with method reference
accountingReadOnlyCopy.describe(); // Method call on object literal with method reference
