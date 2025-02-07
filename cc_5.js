// Task 1: Customer Profile
let customer = {
    name: "Michael Cera",
    age: 36,
    email: "mcera@gmail.com"
};

console.log(`Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`);
// Declared the object customer with the name, age, and email properties. Then logged everything to the console.

// Task 2: Order Details
let order = {
    orderID: 10001,
    totalAmount: 100,
    status: "Pending",

    displayOrder() {
        console.log(`Order ID: ${this.orderID}, Total Amount: ${this.totalAmount}, Status: ${this.status}`);
    }

};
order.displayOrder();
// Declared order as an object with three values. Then assigned the values to displayOrder and had all the values logged to the console.
