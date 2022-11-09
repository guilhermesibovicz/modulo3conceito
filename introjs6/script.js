function sum (a, b, callbackfunction){
    setTimeout(() => { //arrow functions
        //return a + b;
        callbackfunction(a + b);
    }, 500);
    console.log("FIM DA FUNÇÂO")
}

//const a = sum(2, 2);
//console.log(a);
sum(2, 2, function(result){
    console.log(result);
});