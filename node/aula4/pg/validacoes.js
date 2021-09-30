let dia = "sexta";

let resultado = dia == "domingo" ? "Vou a praia!" : "Fico em casa!"; //if ternário
//console.log(resultado);

switch(dia){
    case "segunda", "sexta" :
        console.log("Vou tomar café");
        break;
        case "quarta" :
            console.log("Vou ao cinema");
            break;
    default:
        console.log("Não farei nada");
}