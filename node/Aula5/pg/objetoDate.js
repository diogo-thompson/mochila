const data = new Date();

console.log(data.getDay()); //Dia da semana em número. A contagem inicia em 0, que é domingo.

console.log(data.getDate()); //Dia do mês

console.log(data.getMonth()); //Mês em número. A contagem inicia em 0, que é janeiro.

console.log(data.getFullYear()); //Ano

console.log(data); //data e hora do servidor

const data2 = new Date('2021-10-23'); //Passar uam data específica

console.log(data2.getMonth());