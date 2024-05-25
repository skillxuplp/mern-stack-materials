'use strict';

///////////////////
// Array
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
console.log(weekdays);

const openingHours = {
    [weekdays[3]]: {
        open: 12, 
        close: 22,
    }, 
    [weekdays[4]]: {
        open: 11, 
        close: 23, 
    }, 
    [weekdays[5]]: {
        open: 0, // open 24 hours
        close: 24, 
    },
};
console.log(openingHours);

const restaurant = {
    name: 'Classico Italino', 
    location: 'Via Angelo Tavanti 23, Firenze, Italy', 
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'], 
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'], 
    mainMenu: ['Pizza', 'Pasta', 'Risotto'], 
    
    //es 6 enhanced object literals
    openingHours, 

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }, 

    orderDelivery({starterIndex = 0, mainIndex = 1, address, time = '20:00'}) {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} hrs`)
    }, 

    orderDelivery1(starterIndex = 0, mainIndex = 1, address, time = '20:00') {
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} hrs`)
    }, 

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
    }, 

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

console.log(restaurant);
console.log(restaurant.order(0, 1));
console.log(restaurant.orderDelivery({starterIndex: 2, mainIndex: 1, address: 'rienxe', time: '18:00'}));
console.log(restaurant.orderDelivery({starterIndex: 0, mainIndex: 2, address: 'itemo', time: '13:00'}));
console.log(restaurant.orderDelivery1(0, 2, 'itemo', '13:00'));
console.log(restaurant.orderPasta('i1', 'i2', 'i3'));
console.log(restaurant.orderPizza('ming', ['o1', 'o2', 'o3']));
