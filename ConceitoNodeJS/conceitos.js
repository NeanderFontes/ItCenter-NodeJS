//Node.js é um ambiente que permite a construção de API's que executa através de código JavaScript fora de um navegador.
//Node processa o código que o Google Chrome facilitando o processamento
//Realizações de Croud = (Create) (Update) (Delete) de arquivo JSON para criação de servidores.

//Node.js é sigle threaded, porém não depende de apenas uma requisição

//Vantagens: Baixa memória
//Harmônia das linguagens de frontend.

//Aspectos Técnicos:
//Facilidade de utilizar próprios módulos e importa-los ou seja:
//O Node.js ja vem com módulos pré-instalados para a utilização nas API's (path, fs, http, mysql, express, etc...)
//Exemplos de declaração para import dos módulos:
const express = require("express");
const mysql = require("mysql");
const files = require("./meu_arquivo.js");
const path = require("path");

//Através do comando NPM podemos utilizar instalar esses módulos
//Esses módulos são armazenados em uma pasta chamada de "node_modules" e ao instalar os módulos é criado um arquivo chamado "package.json" com a lista de todos os módulos instalados pelo NPM
//Comandos básicos de npm:
//npm init -y » Iniciar o projeto node e Criar o arquivo package.json
//npm init express » Instala um pacote localmente baseados no framework Express.js.
//npm -g install nodemon //Após a instalação global do "nodemon", você pode usá-lo em qualquer projeto Node.js, simplesmente executando o comando nodemon seguido do nome do arquivo JavaScript que deseja executar, por exemplo, nodemon meu_servidor.js
