/*
    A programação Orientada a Objetos em JavaScript é utilizada para organizar a estrutura do código. 
    Em JavaScript objetos são a instância de uma classe que encapsulam os dados e comportamento ou métodos relacionado ao mesmo. Os Objetos podem também herdar valores de suas pripriedades e métodos.
    1) Objeto: Em JavaScript, o objeto é a instancia criada a partir de uma classe que possuem suas propriedades e métodos,
    2) Classe: A classe não é fortemente tipada em JavaScript mas é possivel simular através de uma criação de função do objeto.
    3) Herança: Em JavaScript a herança são valores de seus atributos e métodos podendo ser usado em suas "subclasses"
    4) Encapsulamento: Ajuda a proteger os dados e métodos criados dentro do objeto e podem ser manipulados através de método específicos.
    5) Polimorfismo: Polimorfismo permite que objetos de classes diferentes sejam tratados de maneira uniforme. Em JavaScript, isso é alcançado através do uso de interfaces e/ou herança.
    6) Abstração: A abstração é a ideia de que você pode criar modelos simplificados dos objetos do mundo real para representar conceitos complexos no código. Isso pode ser feito por meio de classes e objetos.
*/

//Criação de Objeto JS:
class Pessoa {
    //Declaração de método construtor:
    constructor(primeiroNome, ultimoNome, idadePessoa) {
        //Referências ao objeto:
        this.primeiroNome = primeiroNome
        this.ultimoNome = ultimoNome
        this.idadePessoa = idadePessoa
    }

    //Método para obter nome + ultimo nome:
    getFullName() {
        console.log(`${this.primeiroNome} ${this.ultimoNome}`)
    }
}

//Criação de dados do Objeto:
const primeiraPessoa = new Pessoa("Neander", "Barbosa", 34)

//Constructor:
console.log(primeiraPessoa)

//Passagem de método através do objeto:
primeiraPessoa.getFullName()

//Herança:
class Aluno extends Pessoa {
    
    constructor(primeiroNome, ultimoNome, idadePessoa) {
        super(primeiroNome, ultimoNome, idadePessoa)
    }
}

const primeiroAluno = new Aluno("Aluno", "Novo", 16)

console.log(primeiroAluno)

primeiroAluno.getFullName()