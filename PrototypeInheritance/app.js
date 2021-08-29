// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
    return `Hello there, ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Lionel', 'Logue');

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype)

// Make customer.prototype return customer()
Customer.prototype.constructor = Customer

// Create customer
const customer1 = new Customer('Dildo', 'Baggins', '555-555-5555', 'Standard')
console.log(customer1);

// Cusotomer greeting
Customer.prototype.greeting = function() {
    return `Hello there, ${this.firstName} ${this.lastName}! Welcome to our company`;
}

console.log(customer1.greeting());