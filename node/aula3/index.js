//inicio escopo geral
let variavelNumero = 9999;// inteiro / float(numero decimais)
let variavelText = "Diogo";// string
let variavelBooleano = true; // verdadeiro ou falso
let variavelObjeto = {
    nome: "Diogo",
    idade: 35,
    maculino: true,
}
let variavelArray = ["alvaro", "Patrick", "Liazerb"];// guarda dados do mesmo tipo;
let variavelIndefinida;
let variavelNull = null // variavel vazia
let variavelNan = 2 + "35"// não pode ser um numero 
//console.log(typeof variavelObjeto)
//metodos de array
let nomeDosAlunosDaDH = ["Alvaro", "Patrick"];
nomeDosAlunosDaDH.pop();// remove o ultimo item
nomeDosAlunosDaDH.push = ("Diogo");// adiciona array
const posicaoPatrick = nomeDosAlunosDaDH.indexOf("Alvaro");// indica posição do array
//console.log(posicaoPatrick);
console.log(nomeDosAlunosDaDH[posicaoPatrick]);
//FUNCOES E ESCOPO
function imprimeResultadoArray(){
    //inicio do escopo da funcao
console.log(nomeDosAlunosDaDH)
//fim do escopo da funcao
}
function outraFuncao(){
    console.log(nomeDosAlunosDaDH)
}
imprimeResultadoArray()
outraFuncao()
//fim do escopo geral
//VAR usado globalmente
//LET seguindo as regras do escopo
//CONST valor imutavel