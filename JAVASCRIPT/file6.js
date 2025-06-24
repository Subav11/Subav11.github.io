//arrow function
// greet(); //hoisting - we have called function before its declaration but in js function declaration comes before it automatically
// function greet(){
//     console.log("Good Afternoon")
// }

//hoisting
// x=10;
// console.log(x);
// var x;

const greet = () => {console.log("Hello")};
greet();
//hoisting doesn't work in arrow function

//spread operator
const add = (...args) => {
    console.log(args);
}
add(4,5,6,7,8)