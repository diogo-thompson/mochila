//const somar = () => console.log("Estou em uma arrow function"); //sem parametros uma linha
//const somar = numero => console.log("Recebi um número: " + numero); //com 1 parametro uma linha
//const somar = (numeroA, numeroB) => console.log("Recebi um número: " + numeroA);  //2 ou mais parametros uma linha

const somar = (numeroA, numeroB) => {
    console.log("Recebi um número: " + numeroA)
    return numeroA + numeroB;
}

console.log(somar(20, 30));