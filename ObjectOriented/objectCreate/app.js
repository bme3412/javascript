const personPrototypes = {
    greeting: function() {
        return `Hello there, ${this.firstName} ${this.lastName}`
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const lionel = Object.create(personPrototypes);
lionel.firstName = 'Lionel';
lionel.lastName = 'Logue';
lionel.age = 34;

lionel.getsMarried('Baggins');
console.log(lionel.greeting());

const dildo = Object.create(personPrototypes, {
    firstName: {value: 'dildo'},
    lastName: {value: 'baggins'},
    age: {value: 34}
});

console.log(dildo);
console.log(dildo.greeting());