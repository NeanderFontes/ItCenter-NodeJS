var express = require('express');

var app = express();
app.use(express.json());

// Configuração do banco de dados MySQL
var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodepl07"
});

// Conectar ao banco de dados
con.connect(function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Connected");
});

// Rota para inserir um novo item ao armazem
app.post("/armazem/new", (req,res) =>{
    var object = req.body;

    var queryIArmazem = "Insert into Armazem (Nome, Localidade) values (?)";
    var convertedObject = [[object.Nome, object.Localidade]];

    con.query(queryIArmazem, convertedObject, (err, result)=>{
        if(err) res.json(err);
        res.json("Armazem inserido com sucesso com o id "+result.insertId);
    });
});

/*
{
            "Descricao": "Caneta Parker",
            "Valor": 21.5,
            "ArmazemId": 1,
            "Unidades": 300
}
*/
app.post("/artigo/new", (req, res) => {
    var object = req.body;

    var queryIArtigo = "Insert into Artigo (Descricao, Valor) values (?)";
    var convertedObject = [[object.Descricao, object.Valor]];

    con.query(queryIArtigo, convertedObject, (err, result)=> {
        if(err) res.json(err);

        var text = "Artigo inserido com o id: "+result.insertId;

        var queryIStock = "Insert into Stock (ArtigoId, ArmazemId, Unidades) values (?)";
        convertedObject = [[result.insertId,object.ArmazemId, object.Unidades]];

        con.query(queryIStock, convertedObject, (err, result2)=>{
            if(err) res.json(err);
            res.json(text+" e stock com o id: "+result2.insertId);
        })

    });
});

/*
{
            "ArtigoId": 1,
            "Quantidade": 10,
            "DataVenda": "2023/06/22"
}
*/

app.post("/venda", (req,res) =>{
    var object = req.body;

    var queryIVenda = "Insert into Venda (Artigo, Quantidade, DataVenda) values (?)";
    var convertedObject = [[object.ArtigoId, object.Quantidade, object.DataVenda]];

    con.query(queryIVenda, convertedObject, (err, result)=>{
        if(err) res.json(err);
        res.json("Venda inserida com sucesso com o id "+result.insertId);
    });
});

app.get("/armazem/:id", (req, res)=>{
    var id = req.params.id;

    var querySelectStockAtual = "select artigo.Descricao, (stock.Unidades - IFNULL(Sum(Venda.Quantidade),0)) as StockAtual from stock left join venda on venda.Artigo = stock.ArtigoId join artigo on artigo.id =stock.artigoid where armazemid = ? Group by Artigo";

    con.query(querySelectStockAtual, id, (err,result)=>{
        if(err) res.json(err);
        res.json(result);
    })
});

app.get("/top5", (req, res) => {
    var querySTop5 = "Select artigo.Descricao, SUm(venda.Quantidade) as quantidade_total from venda join artigo on artigo.Id = venda.Artigo Group by artigo.Descricao order by quantidade_total desc limit 5;";

    con.query(querySTop5, (err,result)=>{
        if(err) res.json(err);
        res.json(result);
    })
})


var port = 3000;
app.listen(port, () => console.log("Server up on http://localhost:"+port));