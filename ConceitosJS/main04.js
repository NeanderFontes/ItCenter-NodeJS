// JSON é uma codificação entre o FrontEnd(client side) e o BackEnd(server side) do JavaScript.
//Para haver a compreensão entre dados do backend e frontend é criado um formato de dados JSON que por sua vez precisa ser interpretado com uma codificação diferente para ser compreendida entre o servidor e o frontend através de solicitações HTTP
// 1- Sintaxe Simples: O JSON usa uma sintaxe simples que consiste em pares chave-valor, semelhante à sintaxe de objetos em JavaScript.

// 2- Tipos de Dados Suportados: O JSON suporta tipos de dados como números, strings, booleanos, arrays, objetos e valores nulos.

// 3- Facilidade de Leitura: Os dados em formato JSON são fáceis de ler e escrever para seres humanos, o que facilita o processo de depuração e inspeção.

//Frequentementeo utilizado em:
//1. Armazenamento e Transferência de Dados
//2. Comunicação entre Cliente e Servidor
//3. Comunicação via APIs

//Obs.: Sempre que precisar enviar dados do FrontEnd para o Backend precisa "transformar" em dados JSON através do 'JSON.stringfy()':

//Transformando uma lista de objetos em JSON:
//Lista contendo varios Objetos:
const pessoa = [{
    nomePessoa: "Neander",
    idadePessoa: 34,
    moradiaPessoa: "Braga",
},
{
    nomePessoa: "Rebeca",
    idadePessoa: 35,
    moradiaPessoa: "Braga",
},
{
    nomePessoa: "Doreia",
    idadePessoa: 62,
    moradiaPessoa: "Brasil",
},
];

//JSON.stringfy():
const pessoaJSON = JSON.stringify(pessoa);

//JSON.parse() quando recebe o objeto direto do JSON e covnerter para utilizar em JavaScript:
const convertList = JSON.parse(pessoaJSON);