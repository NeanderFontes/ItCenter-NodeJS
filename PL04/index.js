// 2) Criar um servidor de http(com o modulo express) com as seguintes rotas:
//  a. "/insert": Insere alunos a partir de um objeto
//  b. "/details/{id}": Onde o id será o parametro de busca na base de dados
//  c. "/list?class=a": Retorna a lista dos alunos da classe A

// 1º Passo sempre iniciar 'npm init -y' no terminal para criar o package.json

// Criar Const para instalar o MYSQL:
const mysql = require('mysql'); // para instalar npm i mysql
// Criar um servidor HTTP com modulo express:
const express = require("express"); // para instalar npm i mysql
const app = express();//Transformar todos os body em JSON
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

// 2.a."/insert": Insere alunos a partir de um objeto:
// Criação da rota da API para acessar banco de dados:
app.post("/insert", (request, response) => {
    //Function arrow para acessar pela query base de dados "nodepl04" tabela "aluno"
    const queryInsert = "INSERT INTO NodePL04.aluno (nomeAluno,  dataAniversario, class) Values ?";
    // JSON para arary request:
    const data = [[
        request.body.nomeAluno, request.body.dataAniversario, request.body.class
    ]]

    conexao.query(queryInsert, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    });

    response.send("Sucesso!");
});

//2. b. "/details/{id}": Onde o id será o parametro de busca na base de dados:
app.get("/details/:id", (req, res) => {
    const idAluno = req.params.id

    conexao.query("Select * from NodePL04.aluno where idAluno = ?", idAluno, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})

//2. c. "/list?class=a": Retorna a lista dos alunos da classe A
app.get("/list", (req, res) => {
    const classParam = req.query.class

    conexao.query("Select * from NodePL04.aluno where class = ?", classParam, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
})


//localhost:3000
app.listen(3000, () =>{
    console.log("Servidor is running on port 3000")
});
