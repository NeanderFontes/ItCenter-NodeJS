//Funções & Arrow Funtions
//A sintaxe de uma função em java é representado pela expressão 'function'. A function são conjunto de instruções dentro de um bloco de código que ajuda a organizar a estrutura do código JS e otímizar as tarefas específicas.
// Podem sem declaradas com ou sem argumentos e é executada quando a função é 'chamada' ao corpo principal. Ela pode aceitar argumentos, realizar operações com esses argumentos e retornar um valor como resultado.

//Funciton para soma de valores:
function somaNumero(arg1, arg2) {
    return arg1 + arg2
}

let num1 = 2
let num2 = 5
const somarValor = somaNumero(num1, num2)
console.log("Resultado da soma = " + somarValor)

//Arrow function:
//As arrow functions são formas mais concisa e moderna para definir funções em JavaScript. Fornecem uma sintaxe mais compacta para a criação.

//Arrow function para soma de valores:
const arrowFunctionSoma = (num1, num2) => {
    return num1 + num2
}
const arrowSoma = arrowFunctionSoma(num1, num2)

console.log(arrowSoma)