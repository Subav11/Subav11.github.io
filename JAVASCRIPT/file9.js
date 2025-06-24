//arrays
// const score = [2 , 1, 7, 5, 3];
// console.log(score)

// const cart = {
//     1: 5,
//     5: 3
// };
// const newCart = ({...cart, 2: 1});
// console.log(newCart);

// let cart = {}
// const products = [
//     {id:1, name:"Product1",price: 25},
//     {id:2, name:"Product2",price:50},
//     {id:3, name:"Product3",price:75}
// ];
// console.log(products[0])
// function addToCart(id){
//     cart = {...cart, [id]:1};
// }
// addToCart(1);
// addToCart(3);
// console.log(cart);

// const score = [2, 1, 7, 5, 3];
// score.forEach((value, index, arr) => {
//     console.log(value);
// })

// score.map((value) => {
//     console.log(value);
// })
// const newScore = score.map((value) => {
//     return value;
// })

// const score = [2, 1, 7, 5, 3];
// const newScore = score.filter((value) => {
//     return value>2;
// })
// console.log(newScore)

// const score = [2, 1, 7, 5, 3];
// const newScore = score.find((value) => { //return only one value which is the first
//     return value>2;
// })
// console.log(newScore)

const score = [2, 1, 7, 5, 3];
const newScore = score.reduce((sum,value) => { //return only one value which is the first
    return sum+value
},0)
console.log(newScore)