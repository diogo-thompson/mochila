let carro = {
    nome: "fox",
    ano: 2012,
    ligar: function(){
        console.log("O carro " + this.nome + " está ligado");
    }
}

carro.ligar();

function Carro(nomeCarro, anoCarro){
    this.nome = nomeCarro;
    this.ano = anoCarro;
}

let civic = new Carro("civic", "2019");
let gol = new Carro("gol", "2018");

console.log(civic, gol);