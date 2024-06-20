'use strict';

///////////////////
// // Changing the Text, with Button Clicking
// // Accessing an Element by its ID
// const titleElement = document.getElementById("title");
// console.log(titleElement);
// console.log(titleElement.textContent);

// // Adding an Event Listener to a Button
// const button = document.getElementById("changeTextBtn");
// button.addEventListener("click", () => {
//     titleElement.textContent = "<h1>Hello DOM!!</h1>";
// });

///////////////////
// Creating the New Elements, Inserting the Data into the Created Elements, and Appending the Newly Created Elements to the Existing List
// const itemList = document.getElementById("itemList");
// const addItemBtn = document.getElementById("addItemBtn");
// let i = 4;

// addItemBtn.addEventListener("click", () => {
//     // Creating the New List Item
//     const newItem = document.createElement("li");
    
//     // Inserting the Data into the Created List Item
//     newItem.textContent = `Item ${i}`;

//     // Appending the Newly Created List Item into the Existing List
//     itemList.appendChild(newItem);
//     i++;
// });

///////////////////
// Modifying the Styles
// const text = document.getElementById("text");
// const toggleHighlightBtn = document.getElementById("toggleHighlightBtn");

// toggleHighlightBtn.addEventListener("click", () => {
//     text.classList.toggle("highlight");
// });

///////////////////
// Removing the Existing List Item
// const itemList = document.getElementById("itemList");
// const removeItemBtn = document.getElementById("removeItemBtn");

// removeItemBtn.addEventListener("click", () => {
//     if (itemList.lastChild) {
//         itemList.removeChild(itemList.lastChild);
//     }
// });

///////////////////
// Traversing the DOM
const container = document.getElementById("container");

// Accessing the Child Nodes
const paras = container.children;
for (let i = 0; i < paras.length; i++) {
    console.log(paras[i].textContent);
}

// Accessing the Parent Node
const firstPara = container.firstElementChild;
console.log(firstPara.parentNode.id);

// Accessing the Sibblings
const secondPara = firstPara.nextElementSibling;
console.log(secondPara.textContent);