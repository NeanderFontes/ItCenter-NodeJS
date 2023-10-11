//Import para Entrada de dados
const prompt = require("prompt-sync")()

//Entrada de dados:
const nomeEntrada = prompt("Qual é o seu nome? ")
console.log("Olá " + nomeEntrada + " Seja Bem vindo!")

//Soma de valores:
var num1 = prompt("Insira um valor: ")
var num2 = prompt("Insira outro valor: ")
// //Resultado:
num1 = parseInt(num1)
num2 = parseInt(num2)
console.log("Soma = " + (num1 + num2))
//Sem necidade de coerção do tipo:
console.log("Soma = " + (+num1 + +num2))



