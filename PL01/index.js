//Import para leitura de arquivos de método assincrono
const fs = require("fs").promises;

async function main() {
    //Const para ler a pasta do diretório específica
    const items = await fs.readdir("stores", { withFileTypes: true });

    //Ciclo para pecorrer
    for (let item of items) {
        console.log(item.name + "= - " + (item.isDirectory() ? "Pasta" : "Ficheiro"));
    }

    //Chamada de um ficheiro específico para "transformar" em objeto:
    const data1 = JSON.parse(await fs.readFile("stores/sales.json"));

    //Acesso ao atributo do Objeto data1 para manipular
    console.log("Total Escrito no Ficheiro = " + data1.total)

    //Escrever no ficheiro totals.txt o valor que está no total do arquivo JSON(data1.total):
    //await fs.writeFile("stores/totals.txt", String(data1.total))
    
    //Adicionar Novo conteúdo "acrescentado" ao ficheiro
    await fs.writeFile("stores/totals.txt", `${data1.total}\r\n`, {flag:"a"})

}

main()
