// O Módulo express.js é um framework WEB para o backend do node. Essa framework é muito popular e serve para desenvolvimento de aplicativos da WEB.
//Para dar inicio ao uso precisa utilizar instalação "npm install express"

// Import do express:
const expressModulo = require("express");
// Inicialização do express em uma variável:
const app = expressModulo();

// Para Requisição da WEB é utilizado o metodo get():
app.get("/home", (req, res) => {
    res.status(200).send("<h1>Hello word</h1>");
})

app.get("users", (req, res) => {
    //Lista para uma simulação de banco de dados:
    const users = [
        {
            name: "Neander",
            email: "neander@email.com"
        },
        {
            name: "Rebeca",
            email: "rebeca@email.com"
        }
    ];

    //Transformando Objeto em arquivo.json para backend com express :
    res.status.json(users)
})

// Porta de Acesso ao servidor:
const port = 3030;

// Execução do servidor a porta de acesso criada:
app.listen(port, () => {
    console.log(`Servidor online rodando na porta ${port}`)
})