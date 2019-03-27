"use strict";

var numbers = [45, 4, 9, 16, 25, 66];
var numbers2 = [45, 4, 9, 16, 25, 66, 99];
var newArray = numbers.filter(myFunction);
var newArrayOdd = numbers.filter(findOdd);
var newArrayEven = numbers.filter(findEven);


console.log(numbers);
console.log(newArrayOdd);
console.log(newArrayEven);

function myFunction(value, index, array) {
    let myNumbers = (array.length / 2);
    if (index >= myNumbers) {
        return true;
    }
}

function findOdd(value, index, array) {
    let odd = index % 2;
    if(odd !== 0){
        return true;
    }
}
function findEven(value, index, array) {
    let even = index % 2;
    if(even == 0){
        return true;
    }
}