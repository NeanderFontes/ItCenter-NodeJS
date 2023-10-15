//Selecionando Elementos do DOM:
/*
    O que é o DOM:
    Elementos de dom se referem aos elelementos individuais de uma página web, ou seja, elementos HTML, CSS. Esses elementos podem ser manipulados através dp Document Object Model(DOM) ou seja os elementos de HTML E CSS são representados como objetos.
    O DOM é uma interface de programação que permite que os códigos em JavaScript possam interagir com os elementos de uma página WEB.
    Exemplo: com o JavaScript pode:
    1. Acessar o elemento específico "ID, CLASSE ou TIPO"
    2. Alterar o conteúdo de um elemento
    3. Adicionar ou Remover elementos da página WEB
    4. Manipular atributos de elementos
    5. Responder a eventos relacionados a WEB(clique do mouse, envio de forms e etc...) 
*/

//Selecionando Elementos do DOM:
// getElementById = Para selecionar 1 elemento específico elementos através da referência dada ao elemento "id"
//Acessando elemento h1 do body que contém o (id="add-user") para poder manipular quando necessário:
const addUserTexto = document.getElementById("add-user")
//Alterando dados do h1:
addUserTexto.innerText = "Adicionar Usuario"

// querySelector = Serve Para selecionar o elemento em si e seleciona também somente 1 elemento.
const addUserTextoQuery = document.querySelector("#add-user")
//Alterando dados do h1:
addUserTextoQuery.textContent = "Teste Query"

//Selecionar Multiplos Elementos:
const allItems = document.querySelectorAll(".item")
//Alterando dados da li[0]:
allItems[0].innerHTML = "Alterando nome do Item 1"
