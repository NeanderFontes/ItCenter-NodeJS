// Manipulação com sistemas de arquivos em Node.js

// Import do File System "fs":
//const { error } = require("console");
const fileSystem = require("fs");

//Import path:
const path = require("path");

// Criar uma pasta:
fileSystem.mkdir(path.join(__dirname, "/test"), (error) => {
    if (error) {
        console.log("Erro: ", error)
    }
    console.log("Pasta Criada com Sucesso!")
})

// Criar um Arquivo dentro da pasta "test":
fileSystem.writeFile(path.join(__dirname, "/test", "test.txt"), "Hello Node!!", (error) => {
    if (error) {
        console.log("Error: ", error)
    }
    console.log("Arquivo Criado com Sucesso!!")
})

// Adicionar um novo contexto ao Arquivo já existente:
fileSystem.appendFile(path.join(__dirname, "/test", "test.txt"), " Estou aprendendo Node.js", (error) => {
    if (error) {
        console.log("Erro: " + error)
    }
    console.log("Conteúdo modificado com Sucesso!")
})

// Adicionando código para ler arquivo:
fileSystem.readFile(path.join(__dirname, "/test", "test.txt"), 'utf8', (error, data) => {
    if (error) {
        console.log(`Error: ${error}`)
    }
    //Retorno "data" para a leitura do conteúdo do arquivo:
    console.log(`Leitura do Arquivo com Sucesso!! \n${data}`)
})