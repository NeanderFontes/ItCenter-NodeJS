//1º Passo sempre iniciar 'npm init -y' no terminal para criar o package.json

//Utilização do Post em nodejs
const express = require("express");
const app = express();

//Transformar todos os body em JSON
app.use(express.json());

app.post("/", (request, response) => {
    // O Request Acessa os dados enviados no body do pedido
    request.body; 
    // Processa os dados e realiza ações apropriadas
    response.json(request.body);
})

app.listen(3000);