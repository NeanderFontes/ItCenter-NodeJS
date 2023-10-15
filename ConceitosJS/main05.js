//Loops em JavaScript:
//Laço for para executar até valor < 10:
for(let numIndex = 0; numIndex < 10; numIndex++) {
    console.log(numIndex)
}

//Declaração de Const com lista de carros
const listaCarros = ["Ferrari", "Tesla", "Honda", "Toyota", "Mercedes", "BMW"];
//Laço para imprimir no console a lista:
for(let index = 0; index < listaCarros.length; index++) {
    console.log((index + 1) + "º: " + listaCarros[index])
}

//Utilização do forof:
for(let indexOf of listaCarros) {
    console.log(`Lista forOf: ${indexOf}`)
}

//Execução com forEach:
listaCarros.forEach(function(carro, index) {
    console.log(`forEach ${index} = ${carro}`)
})

//Execução de laço while:
let indexWhile = 0
while (indexWhile < 10) {
    indexWhile++
}

//Execução do while:
do {
    indexWhile++
} while (indexWhile < 10)