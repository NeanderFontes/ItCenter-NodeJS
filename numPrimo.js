//Apresentar e dizer se o numero é primo ou não:

//Import para entrada de dados:
const input = require("prompt-sync")()

//Declaração de variáveis e entrada de dados
var numPrimo = input("Insira um valor de entrada: ")
let isPrimo = true;

//Coerção de tipo
numPrimo = parseInt(numPrimo)

//Numero Primo:
for (let i = 2; i <= numPrimo/2; i++) {
    if (numPrimo % i === 0) {
        isPrimo = false;
        break;
    }
}

//Saída de dados:
if (isPrimo) {
    console.log(numPrimo + " é primo");
} else {
    console.log(numPrimo + " não é primo");
}