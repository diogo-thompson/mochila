//OBJETOS
const animal = {
    raca: 'cachorro',
    nome: 'code',
    peso: 20.5,
    cor: 'caramelo',
    comer: function() {
        console.log('Animal comendo')
    }
}

//animal.comer()

//JSON -> PRIMO POBRE
const informacoesEmJson = '{ "nome": "Álvaro", "idade": 26 }'

const jsonConvertido = JSON.parse(informacoesEmJson)

//MÉTODOS DE STRING (TEXTO)
const meuNome = 'Álvaro Ferreira'

// console.log(meuNome.indexOf('F'))

// console.log(meuNome[7])

//LOOPS OU REPETIÇÕES
// console.log(1)
// console.log(2)
// console.log(3)
//...

//Loop que irá imprimir do 1 ao 10
for (i = 0; i < 10; i++ ) {
    //Irá repetir 10x
    //console.log(i)
}

//IF TERNÁRIO
// if (1 == 2) {
//     console.log('Certo')
// } else {
//     console.log('Errado')
// }

// 1 == 1 ? console.log('Certo') : console.log('Errado')

//ARROW FUNCTION
// function nomeDaFuncao() {
//     console.log('Entrou na função')
// }

const nomeDaFuncao = (valor1, valor2) => {
    console.log(valor1 + valor2)
}

nomeDaFuncao(10,10)