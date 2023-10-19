// Importando os módulos necessários
const express = require("express");
const mysql = require("mysql");

// Criando uma instância do aplicativo Express
const app = express();

// Configuração da conexão com o banco de dados MySQL
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodepl1"
});

// Conectando ao banco de dados
con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado ao banco de dados");
});

// Middleware para análise de corpo JSON
app.use(express.json());

// Rota para criar um novo clube
app.post("/clube/new", (req, res) => {
    const object = req.body;
    console.log(object);

    const queryInsertClube = "INSERT INTO Clube(resultado) VALUES (?)";
    const convertedObject = [object.Resultado];

    con.query(queryInsertClube, convertedObject, (err, result) => {
        if (err) res.send(err);
        else {
            console.log(result);
            res.send("Resultado de um jogo inserido com sucesso usando o ID " + result.insertId);
        }
    });
});

// Rota para criar um novo jogador
app.post("/jogador/new", (req, res) => {
    const object = req.body;
    console.log(object);

    const queryInsertJogador = "INSERT INTO jogador(Nome, FkClube) VALUES (?, ?)";
    const convertedObject = [object.Nome, object.FkClube];

    con.query(queryInsertJogador, convertedObject, (err, result) => {
        if (err) res.send(err);
        else {
            console.log(result);
            res.send("Dados do jogador inseridos com sucesso com ID " + result.insertId);
        }
    });
});

// Rota para obter informações sobre um clube e seus jogadores
app.get("/clube/:id", (req, res) => {
    const id = req.params.id;

    // Consulta para obter o nome do clube com base no ID
    const querySelectClube = "SELECT Nome FROM clube WHERE id = ?";

    con.query(querySelectClube, id, (err, result) => {
        if (err) res.json(err);
        else {
            console.log(result);

            // Consulta para obter os jogadores pertencentes ao clube
            const querySelectJogadores = "SELECT Nome, FkClube FROM jogador WHERE FkClube = ?";
            con.query(querySelectJogadores, id, (err, result2) => {
                if (err) res.json(err);
                else {
                    console.log(result2);
                    result[0].Jogadores = result2;
                    res.json(result);
                }
            });
        }
    });
});

// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});
