// 1- Variáveis e tipos de dados do JS:

// Não recomendada através dessa variável não respeita o bloq scope, permitindo alterar os valores de forma indesejada.
// var message = 'Hello world'

// Constante:
const message = 'Hello world'
let mensagem = 'Hello world'
console.log(`Const = ${message}\nLet = ${mensagem}`)

// Tipos de dados:
// Strings usado para representar tipos de textos:
const primeiroNome = 'Neander Fontes'
const ultimoNome = 'Barbosa'
console.log(primeiroNome + " " + ultimoNome)
console.log(`O nome ${primeiroNome} contém ${primeiroNome.length} letras`)
console.log(`Meu último nome é ${ultimoNome.toUpperCase()}`)
const nomeSplit = primeiroNome
console.log(nomeSplit.split(","))
console.log(nomeSplit.split(""))

// Número usado para representar valores numéricos inteiros ou de ponto flutuante:
console.log("=============================")
console.log('Representação do Tipo number:\n')
const idade = 34
const salarioDev = 1250.99
console.log(`${primeiroNome} tem ${idade} anos.\ne vai ter salário de €${salarioDev}`)

// Booleano representa valores de verdadeiro(true) e falso(false)
console.log("=============================")
console.log('Representação do Tipo boolen:\n')
const isDev = true
const isFinish = false
console.log(`${primeiroNome} é Dev? ${isDev}\nEstá formado? ${isFinish}`)

// Undefined representa um valor ainda não definido ou não possui valor atribuido:
console.log("=============================")
console.log('Representação do Tipo undefined:\n')
const tipoIndefinido = undefined;
console.log(`Tipo não definido = ${tipoIndefinido}`)

// Null representa a ausencia de valor atribuido
console.log("=============================")
console.log('Representação do Tipo null:\n')
const tipoNulo = null
console.log(`Valor nulo = ${tipoNulo}`)


// Listas(Array) é uma estrutura de dados que armazena dados de qualquer tipo para uma lista ou coleção ordenada de elementos.
console.log("=============================")
console.log('Representação do Tipo Array:\n')
const listName = ["Neander", "Rebeca", "Doreia", "Igor", "Hugo"]
console.log('Elementos da Lista: ')
console.log(`Array[0] = ${listName[0]}`)
console.log(`Array[1] = ${listName[1]}`)
console.log(`Array[2] = ${listName[2]}`)
console.log(`Array[3] = ${listName[3]}`)
console.log(`Array[4] = ${listName[4]}\n\n`)

// push para adicionar ao final da lista:
listName.push("Qualquer Coisa")
console.log("Adicionando com 'push' ArrayIndex[5] no final da lista:\n" + listName)
console.log(`Array[5] = ${listName[5]}\n\n`)

// unshift no começo da lista:
listName.unshift("Adinalvo")
console.log("Adicionando com 'unshift' ArrayIndex[5] no começo da lista:\n" + listName)

// pop para remover o útilmo index da lista:
console.log(`\nRemovendo com 'pop' útimo item da lista:\nArray[${listName.length}] = 'Removido'`)
listName.pop();
console.log(`Atualizando Tamanho Array[${listName.length}]\nNomes da lista:\n${listName}`)

// indexOf para localizar o index do Array:
console.log(listName.indexOf("Adinalvo"))

// sort para Listar em ordem alfabética:
const listaOrdemAlfabatica = listName.sort()
console.log(listaOrdemAlfabatica)
