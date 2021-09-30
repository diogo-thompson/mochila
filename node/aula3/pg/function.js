//modo declarativo

function somar(a, b){
    //código
    console.log("Estou somando...");
    return a + b;
}
let resultadoSoma = somar(2, 2);
console.log(resultadoSoma);


//modo expressão

const multiplicar = function(a, b){
    //código
    console.log("Estou multiplcando...");
    return a * b;
}
let resultadoMultiplicar = multiplicar(2, 10);
console.log(resultadoMultiplicar);