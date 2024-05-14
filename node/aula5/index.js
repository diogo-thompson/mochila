//variável de controle, condição, incremento (ação)
// for (let i=0; i <= 9; i++) {
//     console.log('entrou ' + i)
// }

//Arrow function
// function nomeFuncao(parametro1, parametro2) {
//     console.log(parametro1 + parametro2)
// }
// nomeFuncao('Olá ', 'mundo')

// let nomeFuncao = (parametro1, parametro2) => {
//     console.log(parametro1, parametro2)
// }
// nomeFuncao('Olá', 'mundo')

//CALLBACK função dentro de função
// let pegaNome = (nome) => {
//     return nome
// }
// let saudar = (nome, callback) => {
//    const saudacao = 'Olá ' + callback(nome)
//    return saudacao
// }
// console.log(saudar('Álvaro', pegaNome))

//MÉTODOS DE ARRAY
let nomes = ['Luiz', 'Álvaro', 'Patricia', 'Marcelo', 'Patrick']

// nomes.forEach((nome) => {
//     console.log('Olá ' + nome)
// })

// const meuNome = 'Álvaro Ferreira'

// for (letra of meuNome) {
//     console.log('Olá ' + letra)
// }

//DATE (DATA)
const dataNascimento = new Date(1995, 2, 27);

console.log(dataNascimento)

