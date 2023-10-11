//Apresentar se numero é par ou impar

//Import para Entrada de dados
const input = require("prompt-sync")()

//Entrada de dados:
var numEntrada = input("Insira um valor: ")
//Coerção e valores:
numEntrada = parseInt(numEntrada)

if(numEntrada % 2 == 0) {
    console.log(numEntrada + " É Par.")
} else {
    console.log(numEntrada + " Não é par.")
}
