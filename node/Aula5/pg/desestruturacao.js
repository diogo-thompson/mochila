let pessoa = {
    nome: 'Diogo',
    altura: 1.70
}

const {nome, altura} = pessoa;

console.log(nome, altura); //poderia ser só nome ou só altura

let listaCompras = ["pão", "queijo", "presunto"];

let [item1, item2, item3] = listaCompras;

console.log(item2);
  
  console.log(listaCompras.map(lista => lista.length));