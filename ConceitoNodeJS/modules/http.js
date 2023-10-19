//O HTTP, ou Hypertext Transfer Protocol, é um protocolo de comunicação usado para a transferência de informações na World Wide Web (WWW). Ele é a base da comunicação da web e é usado para solicitar e transmitir recursos, como páginas da web, imagens, vídeos e outros tipos de dados entre servidores e clientes, como navegadores da web.

//Import modulo de http:
//const { response } = require("express");
const httpModulo = require("http");

//Criando porta de acesso para criação do servidor:
const port = 3000;

//Criação do Servidor:
const servidor = httpModulo.createServer((req, res) => {
    //O Servidor recebe 2 Objeto de Respostas:
    //Request "req" = Resposta do Usuário WEB para o Servidor
    //Response "res" = Resposta do Servido ao Usuário

    //Exemplo de request url:
    if (req.url === "/home") {
        //Enviando content HTML:
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end('<h1>Home Page</h1>')
        res.send(`Concetado com Sucesso na porta ${port}`)
    }

    //Criação do JSON:
    if (req.url === "/users") {
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

        //Enviando content JSON:
        res.writeHead(200, { "Content-Type": "application/json" })
        //Transformando Objeto em arquivo.json para backend:
        res.end(JSON.stringify(users))
    }
})

//Execução do servidor a porta de acesso criada:
servidor.listen(port, () => {
    console.log(`Servidor online rodando na porta ${port}`)
})