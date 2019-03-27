"use strict";
// {
//     let a = 10;
// }


// try{
//     console.log(a);
// } catch(e){
//     console.log(e);
// }


// console.log("Rustem dersde yatir");

function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw "Parameter is not a number!";
    }
  }
  
  try {
    getRectArea(3, 'A');
  }
  catch(e) {
    console.log(e);
    // expected output: "Parameter is not a number!"
  }
  