'use strict';

/////////////////////////
// Constructor Functions and with the NEW Operator
// const Person = function (firstName, birthYear) {
//     // instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;

//     // methods
//     this.calcAge = function () {
//         console.log(2037 - this.birthYear);
//     }
// }

// const williams = new Person("williams", 1991);
// console.log(williams);

// const jonas = new Person("jonas", 1874);
// console.log(jonas);

// williams.calcAge();
// jonas.calcAge();

// // adding properties outside the constructor
// Person.prototype.lastName = "smith";
// console.log(`williams lastName: ${williams.lastName}`);
// console.log(`jonas lastName: ${jonas.lastName}`);

// Person.prototype.species = "Homo Sapiens";
// console.log(williams);

// Person.prototype.fullName = function () {
//     console.log(this.firstName + " " + this.lastName);
// }

// williams.fullName();

// // another example
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }


// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// bmw.accelerate();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();

// bmw.brake();
// mercedes.brake();

// ES Classes
// class PersonCl {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }

//     // instance methods
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }

//     greet() {
//         console.log(`hey ${this.fullName}`);
//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }

//     set fullName(name) {
//         this._fullName = name;
//     }

//     get fullName() {
//         return this._fullName;
//     }
// };

// class StudentCl extends PersonCl {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }

//     introduce() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }

//     calcAge() {
//         console.log(`I'm ${2037 - this.birthYear} years old, but as a Student, I feel more like ${2037 - this.birthYear - 10}`);
//     }
// }

// const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
// martha.introduce();
// martha.calcAge();

// inheritance between 'classes': Object.create
// const PersonProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear);
//     }, 

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }, 
// };

// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear)
//     this.course = course;
// };

// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init("Jay", 2010, "Computer Science");
// jay.introduce();
// jay.calcAge();

// encapsulation: protected properties and methods
// encapsulation: private class fields and methods

// 1. public and private fields 
// 2. public and private methods

class Account {
    // public fields 
    locale = navigator.language;

    // private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        // protected property
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`thanks for opening an account, ${owner}`);
    }

    // public methods
    // public interface
    getMovements() {
        return this.#movements
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    static helper() {
        console.log('helper');
    }

    // private methods
    // #approveLoan(val) {}
    _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account("Jones", "EUR", 5426);
acc1.deposit(260);
acc1.withdraw(130);
acc1.requestLoan(1000);

console.log(acc1.getMovements());
Account.helper();

