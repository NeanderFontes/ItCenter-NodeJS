// Objetos é uma estrutura de dados muito utilizada em JavaScript.
// O Objeto é usado para armazenar diversos valores dentro dessa propriedade ou "pares chave-valor", o que permite criar estruturas de dados complexas.
//Por exemplo, você pode criar um objeto para representar uma pessoa com propriedades como "nome," "idade," e "cidade." Aqui está um objeto simples em JavaScript:

const pessoa = {
    primeiroNome: 'Neander',
    ultimoNome: 'Barbosa',
    idade: 34,
    listaInteresses: ["Surfar", "Jogar", "Assistir Tv"],
    dog: {
        nomeCachorro: "Simba",
        idadeCachorro: 4,
    },
};
const primeiroNome = pessoa.primeiroNome
console.log(primeiroNome)

// destructuring assignment é uma tecnica que permite extrair valores do objeto e atribuir a uma nova variável de forma mais concisa e coveniente. É uma maneira de desestruturar uma estrutura de dados complexa em variáveis individuais:

//Através do destructuring assignment pode renomear as variáveis e utilizar individualmente:
const {
    //Renomeando
    primeiroNome: firstName,
    ultimoNome,
    idade,
    listaInteresses,
    // destructuring do Objeto dog Criado dentro do Objeto pessoa
    dog: {
        nomeCachorro: dogName,
        idadeCachorro,
    },
} = pessoa; //Objeto passado para destructuring assignment
console.log(firstName)

//Acessando a destructuring de dog:
console.log(dogName + " tem " + idadeCachorro + " anos.")

//Lista contendo varios Objetos:
const listaVariosObjetos = [{
    id: 1,
    descricao: "Estudando JavaScript",
    estaCompleto: false,
},
{
    id: 2,
    descricao: "Ler",
    estaCompleto: true,
},
{
    id: 3,
    descricao: "Treinar",
    estaCompleto: true,
},
];
const acessLitst3 = listaVariosObjetos[2].descricao
console.log(acessLitst3)