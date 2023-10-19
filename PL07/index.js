const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Configuração do banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'NodePL07'
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados MySQL: ' + err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Rota para inserir um novo artigo e o respetivo stock
app.post('/artigo/new', (req, res) => {
    const { descricao, valor, nomeArmazem, localidadeArmazem, unidades } = req.body;

    // Inserir o artigo na tabela Artigo
    const artigoQuery = 'INSERT INTO Artigo (Descricao, Valor) VALUES (?, ?)';
    db.query(artigoQuery, [descricao, valor], (artigoErr, result) => {
        if (artigoErr) {
            console.error('Erro ao inserir o artigo: ' + artigoErr);
            res.status(500).send('Erro ao inserir o artigo.');
        } else {
            const artigoId = result.insertId;

            // Inserir o stock na tabela Stock
            const stockQuery = 'INSERT INTO Stock (ArtigoId, ArmazemId, Unidades) VALUES (?, (SELECT Id FROM Armazem WHERE Nome = ? AND Localidade = ?), ?)';
            db.query(stockQuery, [artigoId, nomeArmazem, localidadeArmazem, unidades], (stockErr, stockResult) => {
                if (stockErr) {
                    console.error('Erro ao inserir o stock: ' + stockErr);
                    res.status(500).send('Erro ao inserir o stock.');
                } else {
                    res.status(200).send('Artigo e stock inseridos com sucesso.');
                }
            });
        }
    });
});

// Rota para inserir uma nova venda
app.post('/venda', (req, res) => {
    const { artigoId, quantidade, dataVenda } = req.body;

    // Inserir a venda na tabela Venda
    const vendaQuery = 'INSERT INTO Venda (ArtigoId, Quantidade, DataVenda) VALUES (?, ?, ?)';
    db.query(vendaQuery, [artigoId, quantidade, dataVenda], (vendaErr, vendaResult) => {
        if (vendaErr) {
            console.error('Erro ao inserir a venda: ' + vendaErr);
            res.status(500).send('Erro ao inserir a venda.');
        } else {
            res.status(200).send('Venda inserida com sucesso.');
        }
    });
});

// Rota para retornar artigos armazenados e o respetivo stock com base no ID do armazém
app.get('/armazem/:id', (req, res) => {
    const armazemId = req.params.id;

    // Consulta SQL para obter os artigos armazenados e o respetivo stock
    const consultaSQL = `
    SELECT A.Descricao, S.Unidades
    FROM Artigo A
    JOIN Stock S ON A.Id = S.ArtigoId
    WHERE S.ArmazemId = ?`;

    db.query(consultaSQL, [armazemId], (err, resultados) => {
        if (err) {
            console.error('Erro ao consultar o banco de dados: ' + err);
            res.status(500).send('Erro ao buscar artigos armazenados.');
        } else {
            res.status(200).json(resultados);
        }
    });
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor Express está rodando na porta 3000');
});
