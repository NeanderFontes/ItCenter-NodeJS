// Importe o Express:
var express = require("express");

// Inicialização do Express:
var app = express();
app.use(express.json());

// Importe e configure o MySQL:
var mysql = require("mysql");
var conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "geladosglobows"
});

// Conecte ao banco de dados:
conexao.connect(function (error) {
    if (error) {
        console.log(`Erro: ${error}`);
    }
    console.log("Conectado!");
});

// Rota para adicionar um novo armazém:
app.post("/warehouse/new", (req, res) => {
    var object = req.body;

    var queryInArmazem = "INSERT INTO Armazem (Nome, Localidade) VALUES (?)";

    var convertedObject = [[object.Nome, object.Localidade]];

    conexao.query(queryInArmazem, convertedObject, (err, result) => {
        if (err) res.json(err);
        res.json("Armazém inserido com sucesso com o ID " + result.insertId);
    });
});

// Rota para adicionar um novo gelado e seu estoque:
app.post("/icecream/add", (req, res) => {
    var object = req.body;

    var queryInIcecream = "INSERT INTO Gelado (Descricao, Valor) VALUES (?)";

    var convertedObject = [[object.Descricao, object.Valor]];

    conexao.query(queryInIcecream, convertedObject, (err, result) => {
        let text = "Gelado inserido com o ID: " + result.insertId;

        var queryInStock = "INSERT INTO Stock (GeladoId, ArmazemId, UnidadesInicial) VALUES (?)";

        convertedObject = [[result.insertId, object.ArmazemId, object.Unidades]];

        conexao.query(queryInStock, convertedObject, (err, resultStock) => {
            if (err) res.json(err);
            res.json(`${text} e estoque com o ID: ${resultStock.insertId}`);
        });
    });
});

// Rota para registrar uma venda:
app.post("/sell", (req, res) => {
    var object = req.body;

    var queryInSell = "INSERT INTO Venda (GeladoId, Quantidade, DataVenda) VALUES(?)";

    var convertedObject = [[object.ArtigoId, object.Quantidade, object.DataVenda]];

    conexao.query(queryInSell, convertedObject, (err, result) => {
        if (err) res.json(err);
        res.json("Venda registrada com sucesso com o ID " + result.insertId);
    });
});

// Rota para obter informações de um armazém específico:
app.get("/warehouse/:id", (req, res) => {
    var idParams = req.params.id;

    var querySelectStockAtual = `
    SELECT gelado.Descricao, (stock.UnidadesInicial - IFNULL(SUM(venda.Quantidade), 0)) AS StockAtual
    FROM stock
    LEFT JOIN venda ON venda.GeladoId = stock.GeladoId
    JOIN gelado ON gelado.Id = stock.GeladoId
    WHERE stock.ArmazemId = ?
    GROUP BY gelado.Id;`;

    conexao.query(querySelectStockAtual, idParams, (err, resultStockAtual) => {
        if (err) res.json(err);
        res.json(resultStockAtual);
    });
});

// Rota para obter os 5 gelados mais vendidos:
app.get("/topsell", (req, res) => {
    var queryTopSell = `
    SELECT gelado.Descricao, SUM(venda.Quantidade) AS quantidade_total
    FROM venda
    JOIN gelado ON gelado.Id = venda.GeladoId
    GROUP BY gelado.Descricao
    ORDER BY quantidade_total DESC
    LIMIT 5;`;

    conexao.query(queryTopSell, (err, resultTopSell) => {
        if (err) res.json(err);
        res.json(resultTopSell);
    });
});

// Porta de acesso ao servidor:
var port = 3000;

// Execução do servidor na porta especificada:
app.listen(port, () => {
    console.log(`Servidor online rodando na porta ${port}`);
});
