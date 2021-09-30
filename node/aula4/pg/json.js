let pessoa = {
    nome: "Diogo",
    idade: 35,
    altura: 1.70
}

let json = JSON.stringify(pessoa);

console.log(json);

let objetoDeNovo = JSON.parse(json);
 
console.log(objetoDeNovo);