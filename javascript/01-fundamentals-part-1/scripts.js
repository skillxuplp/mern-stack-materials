////////////////// Linking a Javascript File
// External - <script src=''></script>
// Embedded - <script> ......... </script>
// Inline - javascript:void()

////////////////// Data Types
// Types: 
/**
 * Primitive Data Types
 * 1. Number
 * 2. String
 * 3. Boolean
 * 
 * Abstract Data Types
 * 1. Array
 * 2. Function
 * 3. Object
 * 
 * Misc Data Types
 * 1. Null
 * 2. Undefined
 * 
 */

////////////////// Displaying The Result
// document
// document.write('<p>The Number: 747373</p>');
// document.write("<p>The Number: 74.7373</p>");
// document.write("<p>I'm a Developer</p>");
// document.write('<p style="color: red">The Number: 747373</p>');
// document.write(`
//             <input 
//                 type = 'text' 
//                 name = '' 
//                 value = ''
//             />
//         `);


////////////////// console
// console.log(84734);
// console.log(473.36);
// console.log('<p>this is a single quote result</p>');
// console.warn('this is a warning message');
// console.error('this is an error statement');

////////////////// Keywords 
// let, var, const, array, int, float, async, try, while, for, if

////////////////// Variables
// Declare the Variable
// let js = "amazing";
// console.log(js);
// console.log(46 + 57 * 35);

// let firstName = "Jonas";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// Naming Convention
// let jonas_matlido = "JM";

// let $function;
// let _myTeam;

// console.log(typeof jonas_matlido);

////////////////// let, var and const
// var myName = "Jonas";
// console.log("My Name:" + myName);

// var myName = "JM";
// console.log("My Name:" + myName);

// let fullName = "Williams";
// console.log("Full Name:" + fullName);

// fullName = "Wil";
// console.log("Full Name:" + fullName);

// const birthYear = 1356;
// console.log("BirthYear: " + birthYear);

// birthYear = 1854;
// console.log("BirthYear: " + birthYear);


////////////////// Operators
// Basic Operators
// Math Operators
// const now = 6884;
// const ageJonas = now - 2498;
// const ageSarah = now - 2590;

// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "james";
// const lastName = "schedm";

// console.log(firstName + " " + lastName);

// Assignment Operators
// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4;

// x++;
// x--;

// Comparison Operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah <= 1389);

// const isFullAge = ageSarah >= 1576;
// console.log(isFullAge);

// console.log(now - 1991 > now - 20135);

// Operator Precendence
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let a = b = c = 10;
// let x, y;
// y = 2;
// x = y;

// x = y = 25 - 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


////////////////// Strings and Template Literals
// const firstName = "Jonas";
// const job = "Teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(jonasNew);

// console.log(`Just a regular string...`);
// console.log('String with \n\
// multiple \n\
// lines
// ');

// console.log(`String with \n\
// multiple \n\
// lines
// `);

////////////////// Control Statements
// Take Decision : If, If Else, Nested If Else, Switch Case
// const age = 15;

// if(age >= 18) {
//     console.log(`Sarah can start driving license `)
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, Wait another ${yearsLeft} years!`)
// }

// const birthYear = 2012;

// let century;
// if(birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

//////////////////
// Type Conversion and Coercion
// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);

console.log(Number('jonas'))
console.log(typeof NaN);

console.log(String(23), 23);

// Type Ceorcion
console.log('I am' + 23 + ' years old');
console.log('23' - '10' - 3);

// Truthy and Falsy
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jones'));


const money = 100;
if(money) {
    console.log("Don't spend it all")
} else {
    console.log('You should get a job')
}