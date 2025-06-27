//closure
function main(){
    let b=1;
    function sub(){ //sub is a closure function
        return b++;
    }
    return sub;
}

const f1=main()
console.log(f1());
console.log(f1());