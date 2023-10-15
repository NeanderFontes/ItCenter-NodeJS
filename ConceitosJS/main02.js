// Lista(Array) Métodos muito utilizado com Array: "MAP, FILTER & REDUCE"


//Map é executado num array através de uma função e retorna uma "nova lista" com o tipo de retorno executado através de um parâmetro para o index atual:
const listaNumeros = [1, 2, 3, 4, 5];
const listaMultiplicadaPorDois = listaNumeros.map(function(indexAtual) {
    return indexAtual * 2;
})
console.log("Lista Normal = ")
console.log(listaNumeros)
console.log("Lista Multiplicada com function map() = ")
console.log(listaMultiplicadaPorDois)

//Filter serve para "filtrar" uma lista e retornar através de uma função o parâmetro passado:
const listaIdade = [5, 10, 15, 20, 25, 30];
const listaIdadePar = listaIdade.filter(function(indexAtual) {
    if(indexAtual % 2 === 0) {
        return indexAtual
    }
})

console.log("Lista de Idade = " + listaIdade)
console.log(`Lista com valores Pares = ${listaIdadePar}`)

// Reduce é utilizado para reduzir ou "acumular" os elementos de um arrayy em um único valor podendo ser utilizado em qualquer tipo de dados:
const somarIdade = listaIdade.reduce(function(indexAtual, acumular){
    return acumular + indexAtual
}, 0); // O segundo argumento (0) é o valor inicial do acumulador

console.log("A Soma da Lista de Idade = " + somarIdade)
