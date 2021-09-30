let pessoa = ["diogo", 35, 1.70, "diogo"];
console.log(pessoa);

//push (adiciona no final)
pessoa.push(35);
console.log(pessoa);

//pop (remove do final)
//pessoa.pop();
//console.log(pessoa);
let excluido = pessoa.pop();
console.log(excluido);

//unshift (adiciona no início)
pessoa.unshift(35);
console.log(pessoa);

//shift (remove no início)
pessoa.shift();
console.log(pessoa);

//indexOf
console.log(pessoa.indexOf(1.70));

//lastIndexOf
console.log(pessoa.lastIndexOf("diogo"));

//join
console.log(pessoa.join(" - "));