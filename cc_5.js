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

// Task 3: Shopping Cart
let cartItems = ["Bowls", "Plates", "Cups"];
    cartItems.push("Forks");
    cartItems.pop();
    cartItems.unshift("Spoons");
    cartItems.shift();
console.log(cartItems);
// Declared the array cartItems and gave it 3 values. Then I added a new value, removed the last value in the list, added a new one to the beginning, then removed the first value. Then logged the final array to the console.

// Task 4: Price Adjustments
let prices = [250, 500, 750];
let discountPrices = prices.map(prices => prices * 0.10);

console.log("ON SALE!:",discountPrices);
// Declared an array with the price of 3 items. Then used the map method to apply a 10 percent discount to each product. Then logged the discount to the console.

// Task 5: Product Availability
let inventory = [14, 27, 0, 6, 9];
let itemQuantity = inventory.filter(inventory => inventory > 0);

console.log("Left in Stock:", itemQuantity);
// Declared the inventory as an array and gave it 5 values. Then used the .filter to filter out all 0 stock quantities. Then logged the updated quantity to the console.

//Task 6: Revenue Calculation
let sales = [100, 230, 55, 75];
let totalRevenue = sales.reduce((total, amount) => total + amount, 0);

console.log("Total Revenue:", totalRevenue);
// Declared the sales array with 4 values. Then used the reduce method to add all the values together. Then logged the total revenue to the console.

//Task 7: Customer Search
const customers = ["Alice", "Bob", "Charlie", "David"];
let customerSearch = customers.find(customers => customers === "Charlie");

console.log("Found Customer!:", customerSearch);
// Declared the array customers with 4 names. Then used the .find method to pick charlie out of the list. Then logged it to the console.
