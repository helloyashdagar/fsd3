//set timeout()
console.log("start");
setTimeout(()=>{
    console.log("execute now");
},5000);
console.log("stop");
let count=1;
let timer=setInterval(()=>{
    console.log(count);
    count++;
    if(count==6){
        clearInterval(timer);
    }
},5000);

try(
    let a=10;
    console.log("this will execute regardless of error");

)
function checkAge(age){

    if(age<18){
        throw now error("NOT");
    }
    console.log("yes");
}
try {
    checkAge(15);
}
catch (error){
    console.log(error.message)
}
console