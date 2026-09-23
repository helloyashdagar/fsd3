// call back function
function display(result){
    console.log(result);
}
function call(a,b,callback){//parent
    callback(a+b);

}
call(10,20,display)