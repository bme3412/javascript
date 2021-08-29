// Object.prototype
// Person.prototype

// Person constructor
function Person (firstName, lastName, dob){
    this.firstName =  firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// Calculate age
Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get Full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName;
}

const lionel = new Person('Lionel', 'Logue', '8-12-90');
const brendy = new Person('Brendy', 'Erhard','Oct 26 1987');

console.log(lionel);

console.log(brendy.calculateAge());
console.log(lionel.getFullName());
lionel.getsMarried('Smith');
console.log(lionel.getFullName());