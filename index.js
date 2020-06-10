console.log("Gerenciador de Vendas");

let client = "Léo Serrão";

console.log("Cliente: " + client);

let valProduct = 100;

let valDiscount = 10;

let discountFunc = require("./modules/calcDescount");

let finalValue = discountFunc(valProduct, valDiscount);

console.log ("Valor final do produto R$ "+ finalValue);