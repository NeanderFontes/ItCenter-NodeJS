const express = require("express");
const app = express();
const mysql = require("mysql");

// Configuração de conexão com o banco de dados
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodepl05"
});

// Conectando ao banco de dados
con.connect((err) => {
    if (err) throw err;
    console.log("Conectado ao banco de dados");
});

app.use(express.json());

// Rota para criar uma nova turma
app.post("/class/new", (req, res) => {
    const object = req.body;

    const queryITurma = "INSERT INTO Turma(Description, StartDate, EndDate) VALUES (?)";
    const convertedObject = [[object.Description, object.StartDate, object.EndDate]];

    con.query(queryITurma, [convertedObject], (err, result) => {
        if (err) res.send(err);
        else {
            res.send("Turma criada com sucesso com o ID " + result.insertId);
        }
    });
});

// Rota para criar um novo aluno
app.post("/student/new", (req, res) => {
    const object = req.body;

    const queryIAluno = "INSERT INTO Aluno(Name, BirthDate, FKTurma) VALUES (?)";
    const convertedObject = [[object.Name, object.BirthDate, object.TurmaId]];

    con.query(queryIAluno, [convertedObject], (err, result) => {
        if (err) res.send(err);
        else {
            res.send("Aluno criado com sucesso com o ID " + result.insertId);
        }
    });
});

// Rota para criar um novo módulo
app.post("/modulo/new", (req, res) => {
    const object = req.body;

    const queryIModulo = "INSERT INTO Modulo(Description) VALUES (?)";
    const convertedObject = [[object.Description]];

    con.query(queryIModulo, [convertedObject], (err, result) => {
        if (err) res.send(err);
        else {
            res.send("Módulo criado com sucesso com o ID " + result.insertId);
        }
    });
});

// Rota para criar uma nova avaliação
app.post("/avaliacao/new", (req, res) => {
    const object = req.body;

    const queryIAvaliacao = "INSERT INTO Avaliacao(FkAluno, FkModulo, Result) VALUES (?)";
    const convertedObject = [[object.AlunoId, object.ModuloId, object.Result]];

    con.query(queryIAvaliacao, [convertedObject], (err, result) => {
        if (err) res.send(err);
        else {
            res.send("Avaliação criada com sucesso com o ID " + result.insertId);
        }
    });
});

// Rota para obter informações de uma turma e seus alunos
app.get("/class/:id", (req, res) => {
    const id = req.params.id;

    const querySTurma = "SELECT Description, StartDate, EndDate FROM Turma WHERE id = ?";

    con.query(querySTurma, [id], (err, result) => {
        if (err) res.json(err);
        else {
            const turmaInfo = result[0];

            const querySAlunosTurma = "SELECT Name, BirthDate FROM Aluno WHERE FkTurma = ?";
            con.query(querySAlunosTurma, [id], (err, result2) => {
                if (err) res.json(err);
                else {
                    turmaInfo.Alunos = result2;
                    res.json(turmaInfo);
                }
            });
        }
    });
});

// Rota para obter informações de um aluno, sua média e avaliações disponíveis
app.get("/student/:id", (req, res) => {
    const id = req.params.id;

    const querySAlunoMedia =
        "SELECT A.Name, A.BirthDate, AVG(Av.Result) AS Average FROM Aluno A INNER JOIN Avaliacao Av ON Av.FkAluno = A.Id WHERE A.Id = ?";

    con.query(querySAlunoMedia, [id], (err, result) => {
        if (err) res.json(err);
        else {
            const alunoInfo = result[0];

            const querySAvaliacoes =
                "SELECT M.Description, Av.Result FROM Avaliacao Av JOIN Modulo M ON M.Id = Av.FkModulo WHERE Av.FkAluno = ?";
            con.query(querySAvaliacoes, [id], (err, result2) => {
                if (err) res.json(err);
                else {
                    alunoInfo.Avaliacoes = result2;
                    res.json(alunoInfo);
                }
            });
        }
    });
});

const port = 3000;

app.listen(port, () => {
    console.log("Servidor rodando na porta " + port);
});
