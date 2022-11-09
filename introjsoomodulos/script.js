
let pessoa = {
    nome: "Zezinho",
    idade: 22,
    reservista: true,
    cidade: {
        nome: "Joinville",
        estado: "Santa Catarina"
    },
    telefones: [
        "5555-1234", "99999999"
    ],
    geraEndereco: function(){
        let todosOdTel = "";
        for(let umTelefone of this.telefones){
            todosOdTel += umTelefone + " ";
        }
        return `${this.cidade.nome} - ${todosOdTel}`;
    },
    somaIdade: function(valorAdicional){
        return this.idade + valorAdicional;
    },
    get nomeCompleto() {
        return this.nome;
    },
    set nomeCompleto(nome){
        this.nome = nome;
    }
};

pessoa.nomeCompleto = "Zezinho Sauro";
console.log(pessoa.nomeCompleto);

console.log(pessoa.geraEndereco());
console.log(pessoa.somaIdade(20));
console.log(pessoa.geraEndereco);

console.log(typeof(pessoa));
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['nome']);
pessoa.nome = "Zezinho da Silva";
console.log(pessoa.nome);
pessoa['nome'] = "Zezinho da Silva Sauro";
console.log(pessoa['nome']);

pessoa.endereco = "Rua Lalala 100";
console.log(pessoa);

console.log(JSON.stringify(pessoa));

let objTexto = '{"nome":"mariazinha"}';
let objjs = JSON.parse(objTexto);
console.log(objjs);