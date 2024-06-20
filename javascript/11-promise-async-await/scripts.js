'use strict';

/////////////////////////
// Example 1: Promise
// function getNumber() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const number = Math.random();

//             if (number > 0.5) {
//                 resolve(number);
//             } else {
//                 reject(`Number: ${number} is less than 0.5`);
//             }
//         }, 1000);
//     });
// }

// getNumber()
//     .then((number) => {
//         console.log("Success: ", number);
//     })
//     .catch((error) => {
//         console.error("Error: ", error);
//     });

// Example 2: Async and Await
// async function checkNumber() {
//     try {
//         const number = await getNumber();
//         console.log("Success: ", number);
//     } catch(error) {
//         console.error("Error: ", error);
//     }
// };

// checkNumber();


// Fetch with Async & Await
// async function fetchData() {
//     try {
//         const response = await fetch("https://jsnplaceholder.typicode.com/posts/");
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log(data);
//         data.map((value, index, records) => {
//             console.log(value.title);
//         })
        
//     }  catch(error) {
//         console.log(`Fetch error: ${error}`);
//     }
// }

// fetchData();

// console.log("its a global statement");