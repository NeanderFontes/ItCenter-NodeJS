//Criação de Objeto e instância:
class Pessoa {
    //Método Construtor
    constructor(nome) {
        this.name = nome;
    }

    meuNome() {
        return `Meu nome é ${this.name}`
    }
}

//Exportar os dados do person.js para outro arquivo
module.exports = {
    Pessoa,
};

