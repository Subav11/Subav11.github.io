//regular function
// function greet(){
//     console.log("Good Afternoon");
// }
// greet();

//IIFE - Immediately Invoked Function Expression
// (function greet(){
//     console.log("Good Afternoon")
// })();

// function add(a,b){
//     return a+b
// }

// console.log(add(4,5));

function add(a){
    console.log(arguments);
    console.log(arguments[1]);
}
add(5,4);