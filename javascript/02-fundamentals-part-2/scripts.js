'use strict';

///////////////////
// Activating Strict Mode
// let hasDriversLicense = false;
// const passTest = "tr";

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can drive");

// const interFace = "Audio";
// const priVate = 466;

///////////////////
// Functions
// Function Defintion / Logic
// function logger() {
//     console.log("My name is James");
// }

// Function Calling / Running / Invoking Function
// logger();
// logger();
// logger();


///////////////////
// Function with Arguments
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     // Return Statement
//     return juice;
// }

// Function Call with Parameters
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

// const num = Number('23');
// console.log(`num: ${num}`);
// console.log(`typeof of num: ${typeof num}`);

///////////////////
// Function Declarations vs Expressions
// Function Declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// function calcAge2(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(`age1: ${age1}`);

// const age2 = calcAge2(1843);
// console.log(`age2: ${age2}`);

// console.log(`age1: ${age1}, age2: ${age2}`);

/////////////////// 
// Arrow Functions
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(1796);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `The FirstName: ${firstName}, in Retirement: ${retirement}`;
// }

// let yearsRetirement = yearsUntilRetirement(1991, 'James');
// console.log(yearsRetirement);

// yearsRetirement = yearsUntilRetirement(1259, 'Bob');
// console.log(yearsRetirement);


///////////////////
// Functions Calling other Functions
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
//     return juice;
// }

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// console.log(fruitProcessor(2, 3));
// console.log(fruitProcessor(4, 6));

///////////////////
// Reviewing Functions
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'James'));
// console.log(yearsUntilRetirement(1950, 'Mike'));


///////////////////
// Introduction to Arrays
// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";

// Declaring an Array Variable
// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);
// console.log(friends[1]);

// const yrs = new Array(1991, 1984, 2008, 2020);
// console.log(yrs);
// console.log(yrs[3]);

// console.log(friends.length);
// console.log(yrs.length);

// console.log(friends.length - 1);

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtman", 2037 - 1991, "Teacher", friends];

// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1980, 1967, 2002, 2010, 2018, 2021];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];
// console.log(ages);


///////////////////
// Basic Array Operations (Methods)
// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends);
// console.log(friends.length);

// Add Elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(friends.length);

// friends.unshift("John");
// console.log(friends);
// console.log(friends.length);

// Remove Elements
// friends.pop();
// console.log(friends);
// console.log(friends.length);

// friends.shift();
// console.log(friends);
// console.log(friends.length);

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes(23));

// if(friends.includes("Steven")) {
//     console.log("You have a friend called Steven");
// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// or else
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// console.log(bills, tips, totals);

/////////////////// 
// Introduction to Objects
// const jonasArray = [
//     'Jonas', 
//     'Schmedtman', 
//     2037 - 1991, 
//     'Teacher', 
//     ['Micheal', 'Peter', 'Steven']
// ];

// console.log(jonasArray);

// const jonasObject = {
//     firstName: 'Jonas', 
//     lastName: 'Schmedtman', 
//     age: 2037 - 1991, 
//     job: 'Teacher', 
//     friends: ['Micheal', 'Peter', 'Steven']
// };

// console.log(jonasObject);

// Dot vs Bracket Notation
// console.log(jonasObject.lastName);
// console.log(jonasObject['firstName']);

// const nameKey = 'Name';
// console.log(jonasObject['first' + nameKey]);
// console.log(jonasObject['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// if(jonasObject[interestedIn]) {
//     console.log(jonasObject[interestedIn])
// } else {
//     console.log("Wrong Request!")
// }

// Object Methods
// const jonas = {
//     firstName: 'Jonas', 
//     lastName: 'Schmedtman', 
//     birthYear: 1991, 
//     job: 'Teacher', 
//     friends: ['Micheal', 'Peter', 'Steven'], 
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     calcAge: function () {
//         return 2037 - this.birthYear;
//     }, 

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old, and he is doing a ${jonas.job} job, he has ${this.hasDriversLicense ? 'a' : 'no'} drivers licence, and he has good friends ${this.friends}`;
//     }
// };

// console.log(jonas.calcAge());
// console.log(jonas.getSummary());

// const mark = {
//     fullName: "Mark Miller", 
//     mass: 78, 
//     height: 1.69, 

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "John Smith", 
//     mass: 92, 
//     height: 1.95, 

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI ${john.bmi}`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is not higher than ${john.fullName}'s BMI ${john.bmi}`);
// }


/////////////////// 
// Iterator: The for Loop
// console.log("lifting weights repetition: 1");
// console.log("lifting weights repetition: 2");
// console.log("lifting weights repetition: 3");
// console.log("lifting weights repetition: 4");
// console.log("lifting weights repetition: 5");
// console.log("lifting weights repetition: 6");
// console.log("lifting weights repetition: 7");

// for loop running while condition is TRUE
// for(let rep = 1; rep <= 30; rep++) {
//     console.log(`lifting weights repetition: ${rep}`);
// }

/////////////////// 
// Looping Arrays, Break and Continuing
// const jonas = [
//     'Jonas', 
//     'Schmedtman', 
//     2037 - 1991, 
//     'Teacher', 
//     ['Micheal', 'Peter', 'Steven'], 
//     true
// ];

// const types = [];

// console.log(jonas[0]);
// console.log(jonas[1]);
// console.log(jonas[7]);

// for loop
// for (let i = 0; i < jonas.length; i++) {
//     // reading from jonas array
//     console.log(jonas[i], " - ", typeof jonas[i]);

//     // filling types array
//     types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }

// console.log(ages);

// // continue and break
// console.log('---------- ONLY STRINGS -------------');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], " - ", typeof jonas[i]);
// }

// console.log('-------- BREAK WITH NUMBER ---------------');
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], " - ", typeof jonas[i]);
// }

/////////////////// 
// Looping Backwards and Loops in Loops
// const jonas = [
//     'Jonas', 
//     'Schmedtman', 
//     2037 - 1991, 
//     'Teacher', 
//     ['Micheal', 'Peter', 'Steven'], 
//     true
// ];

// // Backward Loops
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// // Loops in Loops
// for(let excercise = 1; excercise < 4; excercise++) {
//     console.log(`------- Starting excercice ${excercise} ------------`);
//     for (let rep = 1; rep <= 6; rep++) {
//         console.log(`Excercise ${excercise}: Lifting weight repetition: ${rep}`);
//     }
// }

/////////////////// 
// The While Loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weight repetition: ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(`dice: ${dice}`);

// dice = Math.round(Math.random() * 6) + 1;
// console.log(`dice: ${dice}`);

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(`dice: ${dice}`);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = (Math.trunc(Math.random() * 6) + 1);
//     if (dice === 6) console.log(`Loop is about to end...`);
// }

// const calcTip = function(bill) {
//     return bill >= 50 ? bill * 0.5 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);