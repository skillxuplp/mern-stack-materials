'use strict';

///////////////////
// Default Parameters
// const bookings = [];

// const createBooking = function (
//     flightNum, 
//     numPassengers = 1, 
//     price = 240.23 * numPassengers
// ) {
//     const booking = {
//         flightNum, 
//         numPassengers, 
//         price
//     }

//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LG143', 12);
// createBooking('LF431', undefined, 5);


///////////////////
// How Passing Arguments Works: Value vs Reference
// const flight = 'LH245';
// const jonas = {
//     name: 'Jonas', 
//     passport: 6336379673,
// };

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 574788473) {
//         alert('Checked In!');
//     } else {
//         alert('Wrong Passport!');
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000000000);
//     console.log(person.passport);
// }

// newPassport(jonas);
// checkIn(flight, jonas);


///////////////////
// Functions Accepting Callback Functions
// const oneWord = function (str) {
//     return str.replace(' ', ', ').toLowerCase();
// }

// let word = oneWord('Hello I am Here!');
// console.log(word);

// const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// let uWord = upperFirstWord('i am leaving to canada');
// console.log(uWord);

///////////////////
// Higher Order Functions
// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// }

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// JS Uses Callbacks all the time
// const high5 = function () {
//     console.log('hi5');
// }

// document.body.addEventListener('click', high5);
// ['jonas', 'martha', 'adam'].forEach(high5);

///////////////////
// Functions Returning Functions
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Jonas');


///////////////////
// The call and apply Methods
// const lufthansa = {
//     airline: 'Lufthansa', 
//     iataCode: 'LH', 
//     bookings: [], 
//     // book: function () {}
//     book (flightNum, name) {
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     }, 
// };

// lufthansa.book(424, 'Jonas');
// lufthansa.book(345, 'Smith');

// const book = lufthansa.book;
// // book(278, "Sarah"); // it won't work

// const eurowings = {
//     airline: "Eurowings", 
//     iataCode: "EW", 
//     bookings: [],
// };

// // call method
// book.call(eurowings, 23, 'sarah williams');
// console.log(eurowings);

// book.call(lufthansa, 633, 'Mary Cooper');

// const swiss = {
//     airline: "Swiss Air Lines", 
//     iataCode: "LX", 
//     bookings: [], 
// };

// // apply method
// const flightData = [747, 'George Cooper'];
// book.apply(swiss, flightData);

// book.apply(lufthansa, flightData);

// // bind method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(42, 'Steven Williams');
// bookLH(87, 'Williams');
// bookLX(38, 'Steven');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// lufthansa.buyPlane();

// // access a buy class in any selector at HTML
// // <button type="button" class="buy">buy</button>
// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


///////////////////
// Partial Application
// const addTAX = (rate, value) => value + value * rate;
// console.log(addTAX(0.1, 200));

// const addVAT = addTAX.bind(null, 0.23);
// // addVAT = value => value + value * 0.23

// console.log(addVAT(100));
// console.log(addVAT(23));

// // Another 
// const addTaxRate = function (rate) {
//     return function (value) {
//         return value + value * rate;
//     }
// }

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(35));


///////////////////
// const poll = {
//     question: 'What is your favourite programming language?', 
//     options: ['0: Javascript', '1: Python', '2: Java', '3: Data Science'], 
//     // this generates [0, 0, 0, 0]. 
//     answers: new Array(4).fill(0), 
//     registerNewAnswer() {
//         // Get Answer
//         const answer = Number(
//             prompt(
//                 `${this.question} \n ${this.options.join('\n')} \n (Write option number)`
//             ),
//         );
//         console.log(answer);

//         // Register Answer
//         typeof answer === 'number' && 
//             answer < this.answers.length && 
//             this.answers[answer]++;

//         this.displayResults();
//         this.displayResults('string');
//     }, 

//     // displayResults()
//     displayResults(type = 'array') {
//         if (type === 'array') {
//             console.log(this.answers);
//         } else if (type === 'string') {
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//     }, 
// };

// document
//     .querySelector('.poll')
//     .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({answers: [5, 2, 3]}, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1]}, 'string');

///////////////////
// Immediately Invoked Function Expressions (IIFE)
// const runOnce = function () {
//     console.log(`This will never run again`);
// };

// runOnce();

// // IIFE 
// (function () {
//     console.log('This will never run again');
//     const isPrivate = 23;
//     console.log(isPrivate);
// })();

// console.log(isPrivate);

// (() => console.log("This will ALSO never run again"))();


// {
//     const isPrivate = 23;
//     var notPrivate = 46;
//     let checkPrivate = 38;
// }

// // console.log(isPrivate);
// console.log(notPrivate);


///////////////////
// Closures
// const secureBooking = function () {
//     let passengerCount = 0;

//     return function () {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

///////////////////
// More Closure Examples
// Example1
// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// };

// Example2
// const boardPassengers = function (n, wait) {
//     const perGroup = Math.floor(n / 3);

//     setTimeout(function() {
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000);

//     console.log(`Will start boarding in ${wait} seconds`);
// };

// // const perGroup = 1000;
// boardPassengers(10, 3);
