//Condicionais em JavaScript:
//Normalmente se usa condição de "===" para igualdade de valores e tipos da variável, para somente "==" envolve a igualdade de valor.
const num = 2
if (num % 2 === 0) {
    console.log(`Numero ${num} é par`)
} else if (num % 2 != 0) {
    console.log(`Numero ${num} é impar`)
} else {
    console.log("Número é 0")
}

//Condições && Para executar código que contenham todas as informações válidas.

//Condição || para que o código seja executado caso alguma das opções seja válida.

//Operador ternario:
let operadorTernario = num % 2 === 0 ? true : false
console.log(operadorTernario)

//switch case:
const carro = "Tesla"
switch (carro) {
    case "Mercedes":
        console.log("É um Carro Merdedes")
        break
    case "Honda":
        console.log("É um Carro Honda")
        break
    case "BMW":
        console.log("é um Carro BMW")
        break
    default:
        console.log("Não contém a marca")    
}