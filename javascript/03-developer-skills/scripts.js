// remember, we're gonna use strict mode in all scripts!
'use strict';

//////////////////////

const temparatures = [3, -2, -6, 1, 'error', 9, 13, -17, 18, 3, 9];
//  Problem 1:
// Understanding the problem
// - what is temp amplitude? 
// - how to compare max and min temparatures?
// - what's a sensor error? and what to do?

// Breaking up into sub problems
// - how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;

//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }

//     console.log(max, min);
//     return max - min;
// }


// const amplitude = calcTempAmplitude(temparatures);
// console.log(amplitude);


//////////////////////
// Debugging with the Console and Breakpoints

////////////////////// console
// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp', 
//         unit: 'celsius', 

//         // FIX
//         value: Number(prompt("Degrees celsius:")), 
//         // value: 10, 
//     };
    
//     // FIND
//     console.table(measurement);

//     console.log(measurement.value);
//     console.warn(measurement.value);
//     console.error(measurement.value);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// // 1. IDENTITY
// console.log(measureKelvin());

////////////////////// debugger
// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);

    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }

    console.log(max, min);
    return max - min;
}

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
