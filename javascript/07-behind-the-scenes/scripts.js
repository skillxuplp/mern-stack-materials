'use strict';

///////////////////
// Scope (Variables)
// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         // creating a NEW variable with same name as an outer scope's variable
//         const firstName = 'Steven';

//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         var millenial = true;

//         // Re-assigning the outer scope's variable
//         output = 'New Output';

//         const str = `Oh!! and you're a millenial, ${firstName}`;
//         console.log(`str which is inside printAge(): `);
//         console.log(str);

//         function add(a, b) {
//             return a + b;
//         }

//         console.log(`millenial: ${millenial}`);
//         console.log(`add(): ${add(2, 3)}`);
//         console.log(`output: ${output}`);
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Jonas';
// const age = 2037 - 1991;
// calcAge(1991);
// console.log(age);


///////////////////
// Hoisting
// variables
// needs to declare the variable initially, later have to use
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'Teacher';
// const year = 1991;


// functions
// function addDecl(a, b) {
//     return a + b;
// }

// function addExpr(a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
// console.log(addArrow(2, 3));


///////////////////
// the this keyword
// console.log(this);

// anonymous function
// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAge(1991);

// arrow function
// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1991);

// const jonasObject = {
//     year: 1991, 
//     calcAge: function () {
//         console.log(this);
//         console.log(2027 - this.year)
//     }
// };

// jonasObject.calcAge();

///////////////////
// Regular Function vs Arrow Function
// var firstName = "Matilda";

// const jonasObject = {
//     firstName: "Jonas", 
//     year: 1991, 
    
//     calcAge: function () {
//         console.log(`------ inside calcAge() ----------`);
//         console.log(this);
//         console.log(2037 - this.year);

//         // Example 1
//         const self = this;
//         const isMillenial1 = function () {
//             console.log(`------ inside isMillenial() General Function ----------`);
//             console.log(self);
//             console.log(self.year >= 1981 && self.year <= 1996);
//         }

//         // Example 2
//         const isMillenial2 = () => {
//             console.log(`------ inside isMillenial() Arrow Function ----------`);
//             console.log(self);
//             console.log(self.year >= 1981 && self.year <= 1996);
//         }

//         isMillenial1();
//         isMillenial2();
//     }, 

//     greet: () => {
//         console.log(`------ inside greet() Arrow Function ----------`);
//         console.log(this);
//         console.log(`hey ${firstName}`);
//     },
// };

// jonasObject.calcAge();
// jonasObject.greet();


///////////////////
// arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

// addExpr(2, 5);
// addExpr(3, 8, 4, 9);

// it won't work
// const addArrow = (a, b, c) => {
//     console.log(arguments);
//     return a + b + c;
// }

// addArrow(2, 6, 3);

///////////////////
// Objects vs Primitives
// Primitives
// let age = 30;
// let oldAge = age;

// age = 31;
// console.log(age);
// console.log(oldAge);

// oldAge = 25;
// console.log(age);
// console.log(oldAge);

// // Objects
// const me = {
//     name: "Jonas", 
//     age: 30, 
// };

// const friend = me;
// friend.age = 27;

// console.log(me);
// console.log(friend);

// // Primitive Types
// let lastName = "Williams";
// let oldLastName = lastName;

// lastName = "Davis";
// console.log(lastName);
// console.log(oldLastName);

// // Reference Types
// const jessica = {
//     firstName: "Jessica", 
//     lastName: "Williams", 
//     age:  27, 
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";

// console.log("Before Marriage: ");
// console.log(jessica);

// console.log("After Marriage: ");
// console.log(marriedJessica);

// // Copying Objects
// const jessica2 = {
//     firstName: "Jessica", 
//     lastName: "Williams", 
//     age: 27, 
//     family: ["Alice", "Bob"]
// };

// const jessicaCopy = Object.assign({}, jessica2);
// console.log("Jessica2: ")
// console.log(jessica2);

// console.log("Jessica Copy: ");
// console.log(jessicaCopy);

// jessicaCopy.lastName = "Davis";
// console.log("Jessica2 Updates: ")
// console.log(jessica2);

// console.log("Jessica Copy Updates: ");
// console.log(jessicaCopy);