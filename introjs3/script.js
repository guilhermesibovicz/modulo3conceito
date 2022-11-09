function infinity() {
    let i = 0;
    while(true){
        console.log(i++);
    }
}

function infinity2(){
    let i = 0;
    //setInterval(funcion(){  //define o intervalo de execução repetido
    //CALLBACK
    //JS executa func daq a 1 segundo 
    setTimeout(function(){ // define um tempo de execução
        console.log(i++);
        return i;
    }, 1000); //unidde de milisegundos 
    console.log("FIM DO INFINITY2")
}

function date(){
    console.log(new Date());
    fazqqcoisa();
}

function fazqqcoisa(){
    console.log("qq coisa");
}
//infinity(); cuidado
//let resultado = infinity2();
//console.log("Result " + resultado);
infinity2();
date();