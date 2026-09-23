//global scope 
let a =10;
let b=30;
function x( )
{
    let x=20;
}
//block scope
if (true){
    let x=10;
    let y=10;
    console.log(x);
    console.log(y);
}
//hosting
console.log(name);
var name="venky";

//console.log(age);
//let age=20;  //reference error due to declaration after console

//the period the scope between entering a scope and initialise with data type let ans const occut tdz

//CLOSER
//iclouser occur inner function remember the variable of outer function even the outer variable finished.

function outer(){
    let count=0;
    
}
function inner(){
    count++;
    console.log(count);
}

return inner;
let increment =outer();


