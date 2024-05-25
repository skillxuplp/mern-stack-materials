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
const lufthansa = {
    airline: 'Lufthansa', 
    iataCode: 'LH', 
    bookings: [], 
    // book: function () {}
    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
    }, 
};

lufthansa.book(424, 'Jonas');
lufthansa.book(345, 'Smith');

const book = lufthansa.book;