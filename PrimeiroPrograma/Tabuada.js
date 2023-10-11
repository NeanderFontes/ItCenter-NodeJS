//Implementação da tabuada pelo numero de entrada pelo utilizador:

//Import Scanner para entrada de dados:
const input = require("prompt-sync")();

//Entrada de dados pelo utilizador sem Ciclo while:
// const NUMENTRADA = input("Insira um valor para imprimir a tabuada do mesmo: ")
// for (let numIndice = 0; numIndice < 10; numIndice++) {
//     console.log((numIndice + 1) + " x " + NUMENTRADA + " = " + ((numIndice + 1) * NUMENTRADA))
// }

let numEntrada = null;
do {
    numEntrada = input("Insira um valor para imprimir a tabuada do mesmo: ")//Laço para percorrer a tabuada do numero inserido:
    for (let numIndice = 0; numIndice < 10; numIndice++) {
        console.log((numIndice + 1) + " x " + numEntrada + " = " + ((numIndice + 1) * numEntrada))
    }
} while (numEntrada > 0)

