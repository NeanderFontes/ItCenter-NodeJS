//Calcular Numero Fatorial:

//Import Scanner
const input = require("prompt-sync")();

//Entrada de dados:
const numero = input("Fatorial, digite seu numero: ");
let resposta = numero;
let fatorial = parseInt(numero);

for (let i = parseInt(numero) - 1; i >= 1; i--) {
    fatorial *= i;
    resposta += "x" + i;
}

resposta += " = " + fatorial;
console.log(resposta);