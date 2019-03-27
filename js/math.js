"use strict";

let number = Math.pow(8, 3);
let number2 = Math.abs(45654);

let random1 = Math.floor(Math.random() * 100);
let random2 = Math.floor(Math.random() * 10) + 5;
let random3 = getRndInteger(5, 19);


function getRndInteger(min, max) {
    try{
        return Math.floor(Math.random() * (max - min)) + min;
    } catch(err){
        
    }
}

console.log(random3);
console.log((5 != "5"));