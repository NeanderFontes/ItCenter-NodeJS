//1º Passo sempre iniciar 'npm init -y' no terminal para criar o package.json

//Const para requerir o MYSQL:
const mysql = require('mysql'); // para instalar npm i mysql

const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    //database: "sqlnode1"
});

conexao.connect(function (err) {
    if (err) throw err;
    console.log("Connected");

    //Função para Selecionar * da base de dados: "sjm" dentro da tabela: "teste"
    const query = "Select * from sjm.teste";
    conexao.query(query, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    })

    //Valores para inserir ao banco de dados:
    const queryInsert = "Insert into sjm.teste (nome, adress, vendas) Values ?"
    const values = [
        ['Pedro', 'Rua 123', 24],
        ['Filipe', 'Rua 321', 21],
        ['Ferreira', 'Rua 456', 20],

    ];

    //Função para inserir os dados:
    // conexao.query(queryInsert, [values], function (err, result, fields) {
    //     if (err) throw err;
    //     console.log("Number of records inserted: " +result.affectedRows);
    // })

    //Valores para atualizar a dentro da base de dados a tabela de "vendas e id"
    const queryUpdate = "Update sjm.teste Set vendas = ? where id = ?";
    const data = [30, 2]

    //Função para adicioar os valores de queryUpdate
    // conexao.query(queryUpdate, data, function(err, result) {
    //     if(err) throw err;
    //     console.log("Number of records updated: " +result.affectedRows);
    // })

    //Valores de dados para ser deletar da tabela:
    const queryDelete = "Delete from sjm.teste where id = ?"
    const dataDelete = [2]

    //Função para deletar os dados acima específico da tabela:
    conexao.query(queryDelete, dataDelete, function(err, result){
        if(err) throw err;
        console.log("Resultado para o delete dos dados: " +result.affectedRows);
    })
})
