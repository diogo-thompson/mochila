//Início do escopo geral

let variavelNumero = 9999 //int | float
let variavelTexto = "Álvaro" //String
let variavelBoleana = true //Este tipo pode receber apenas 'true' ou 'false'
let variavelObjeto = { //Object
    nome: "Álvaro",
    idade: 26,
    masculino: true    
}
//Aqui é onde eu crio um array para guardar a idade dos alunosda DH
let variavelArray = [10, 20, 15, 50]
let variavelIndefinida
let variavelNull = null
let variavelNan = 2 + "35" //Nan = mão pode ser um número

//MÉTODOS de ARRAY
let nomeDosAlunosDaDH = ['Álvaro', 'Patrick']

nomeDosAlunosDaDH.push('Samuelso') //Push adiciona mais um item ao fim do array

nomeDosAlunosDaDH.pop() //Pop remove o ultimo item do array

const posicaoPatrick = nomeDosAlunosDaDH.indexOf('Patrick') //const não muda, nasce e morre com o mesmo valor.

//FUNÇÕES E ESCOPO

function imprimeResultadoArray() {
    //Este é o início do espoco da função

    var umValorQualquer = 'Valor qualquer'

    //Este é o fim do espoco da função
}


function outraFuncao() {
    //Este é o início do espoco da função

    console.log(umValorQualquer)

    //Este é o fim do espoco da função
}

outraFuncao()

imprimeResultadoArray()

//Fim do escopo geral