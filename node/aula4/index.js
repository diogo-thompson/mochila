const pessoa = {
    nome: "Diogo",
    cpf: "123.456.789-10",
    idade: 35,
    casado: false,
    falar: function(){
        return "Estou falando"
    }
}

//______________________________________

//OBJETOS
const animal = {
    raca: "cachorro",
    nome: "code",
    peso: 20.5,
    cor: "caramelo",
    comer: function(){
        console.log("Animal comendo");
    }
}

//JSON -> PRIMO POBRE
const informacoesEmJson = '{ "nome": "Diogo", "idade": 35 }';

const jsonConvertido = JSON.parse(informacoesEmJson);

//MÉTODOS DE STRING (TEXTO)
const meuNome = "Diogo Thompson";

console.log(meuNome.length);
console.log(meuNome.indexOf("i"));

//LOOPS OU REPETIÇÕES
//console.log(1);
//console.log(2);
//console.log(3);
//...

//Loop que irá imprimir do 1 ao 10
for(i = 0; i <= 9; i++){
    //Aqui será a repetição
    //console.log(i);
}

//IF TERNÁRIO
// if(1==1){ //exemplo if e else
// console.log("certo");
// } else {
//     console.log("errado")
// }

// i == 1 ? console.log("certo") : console.log("errado"); //if ternário

//ARROW FUNCTION
//function nomeDaFuncao(){
//  console.log("Entrou na função");
//}

const nomeDaFuncao = (valor1, valor2) => {
    const soma = valor1 + valor2;
    console.log(soma);
}

nomeDaFuncao(10, 10)