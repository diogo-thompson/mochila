const fs = require("fs");

let moment = require("moment");

const superHerois = require("./superHerois");

let dados = fs.readFileSync(__dirname + "/dados.txt", "utf8");

let data = moment().format("MMM do YY");

console.log(superHerois);