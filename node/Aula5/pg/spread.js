let frutas = ["maça", "banana", "uva"];

let frutas2 = ["laranja", "limão", "pessego"];

let listaCompleta = [...frutas, ...frutas2]; //... = spread operator fazendo união de arrays

console.log(listaCompleta);

let pessoa = {
    nome: 'Diogo',
    IDADE: 35
}

let infoPessoal = {
    tel: "123456789",
    rg: 100101011,
    ...pessoa //... = spread operator fazendo união de propriedades de objetos
}

let pessoaCompleta = {
    endereco: "Rua xyz",
    ...infoPessoal //
}

//console.log(infoPessoal); //imprime infoPessoa + pessoa
console.log(pessoaCompleta); //imprime pessoaCompleta + infoPessoal + pessoa

function letras(...param){//trabalhando spread operator com função, parametros infinitos.
    console.log(param);
}

letras("a", "b", "c");