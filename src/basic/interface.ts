interface Customer {
    name: string;
    age: number;
}

const customer: Customer = {
    name: "John Doe",
    age: 30,
}

console.log(customer);

/* Extend the Customer interface */
interface addressCustomer extends Customer {
    address: string;
}

const addressCustomer: addressCustomer = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street"
}

console.log(addressCustomer);