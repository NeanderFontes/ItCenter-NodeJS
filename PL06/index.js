//1º Passo sempre iniciar 'npm init -y' no terminal para criar o package.json

//Criação da require express npm i express:
const express = require("express");

//Criação da require mysql npm i mysql:
const mysql = require('mysql')

//Transformar todos os body em JSON:
const app = express();
app.use(express.json());

// Atribuir conexão para acesso ao banco de dados:
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
});

// Função para acessar conexão de banco de dados:
conexao.connect(function (err) {
    if (err) throw err;
    console.log("Connected");
});

//2.a. “/newgame”: Insere o resultado de um jogo entre dois clubes
app.post("/newgame", (request, response) => {
    //Function arrow para inserir pela query base de dados "nodepl046" tabela "clube"
    const queryInsert = "INSERT INTO NodePL06.resultado (fkHomeClub, FkAwayClub, Score) Values ?";
    // JSON para arary request:
    const data = [[
        request.body.fkHomeClub, request.body.FkAwayClub, request.body.Score
    ]]

    conexao.query(queryInsert, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    });

    response.send("Sucesso!");
});

//2.b. “/player/{id}”: Retorna os dados do jodador com o {id} 
app.get("/player/:id", (req, res) => {
    const idPlayer = req.params.Id

    conexao.query("Select * from NodePL06.clube where Id = ?", idPlayer, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

//2.“/club/{id}”: Retorna os dados do clube e os respetivos jogadores associados ao mesmo 
app.get("/player/:id", (req, res) => {
    const idClub = req.params.Id

    conexao.query("Select * from NodePL06.clube where Id = ?", idClub, (err, result) => {
        if(err) {
            throw err;
        }
        res.json(result);
    })
})