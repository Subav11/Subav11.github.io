var a = 10;
if(10>2){
    //var is functional scope
    var a=20; //var is used outside also
    //output-20
}
console.log(a);

let a = 10; //block scope
if(10>2){
    let a=20; //var is accessible outside also output-10
}
console.log(a);