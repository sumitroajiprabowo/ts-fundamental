// Private members are only accessible within the class they are defined in.
// Protected members are accessible within the class they are defined in and
// within classes that extend the class they are defined in.
//
class DepartmentPrivate {
  private name: string;
  private employee: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: DepartmentPrivate) {
    console.log(`Department: ${this.name}`);
  }

addEmployee(employee: string) {
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


// Public members are accessible from anywhere.
class DepartmentPublic {
  public name: string;
  employee: string[] = []; // Public members are accessible from anywhere.

  constructor(n: string) {
    this.name = n;
  }

  describe(this: DepartmentPublic) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

const accountingPublic = new DepartmentPublic("Accounting");
accountingPublic.name = "Development"; // Public members are accessible from anywhere.
accountingPublic.describe();

accountingPublic.addEmployee("Dawu");
accountingPublic.addEmployee("Merdeka");
accountingPublic.employee[2] = "Dawu Merdeka"; // Public members are accessible from anywhere.

accountingPublic.printEmployeeInformation();

// Protected members are accessible within the class they are defined in and
class DepartmentProtected {
  protected name: string;
  protected employee: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  addEmployee(employee: string) {
    this.employee.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class ITDepartment extends DepartmentProtected {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id);
        this.admins = admins;
    }
}

const it = new ITDepartment("d1", ["Zaenal"]);

it.addEmployee("Zaenal");
it.addEmployee("Abidin");

it.printEmployeeInformation();
