// VARIAVEL GLOBAL
//TIPO NUMERICO = NUMBER
a = 10;
console.log(a + " " + typeof(a));
//STRING INTERPOLATION
console.log(`a  ${a} ${typeof(a)}`);
//DECIMAL
a = 20.5
console.log(a + " " + typeof(a));
//COMPARANDO SE VALORES SÃO IGUAIS
console.log(a == 20.5);
console.log(a == "20.5");
//COMPARANDO SE VALORES SÃO IGUAIS
// E OS TIPOS SÃO IGUAIS
console.log(a === "20.5");
//TIPO LÓGICO
a = true; // FALSE
console.log(a + " " + typeof(a));
console.log(a == "0");
//TIPO TEXTO
a = 'Porquê você não passa lá...';
console.log(a + " " + typeof(a));
//ARRAY - LISTAS (OBJECT)
a =['um', 'dois', 'três']
console.log(a + " " + typeof(a));
a = Array();
a[0]="lalala"
a.push("lelele");
console.log(a.pop()); //STACK - PILHA
console.log(a + " " + typeof(a));

//OBJECT
a = new Object();
a.idade = 20;
a.nome = "zezinho";
console.log(a + " " + typeof(a));
console.log(JSON.stringify(a));

function minhaFuncao(umnumero){
    console.log(umnumero);
    console.log("Fui Clicado...");
    let caixinha = document.getElementById("valor");
    //caixinha.value += umnumero;
    caixinha.value = "2+2=" + eval("2+2");
}