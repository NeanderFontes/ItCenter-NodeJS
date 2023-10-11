//Calcular Numero Fatorial:

//Import Scanner
const input = require("prompt-sync")();

//Entrada de dados:
const numeroEntrada = input("Fatorial, digite seu numero: ");
let concatenarValorString = numeroEntrada; //"10"
let numfatorial = parseInt(numeroEntrada); //10

for (let numIndice = parseInt(numeroEntrada) - 1; numIndice >= 1; numIndice--) {
    numfatorial *= numIndice;
    //Transformação do numFatorial em String e fazendo a concatenação com x no cliclo for:
    concatenarValorString += "x" + numIndice;

    //Condição para imprimir valores na última iteração:
    if (i == 1) {
        console.log(concatenarValorString + " = " + numfatorial)
    }
}