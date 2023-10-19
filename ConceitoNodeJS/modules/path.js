//O módulo path é especialmente útil ao lidar com manipulação de caminhos de arquivo e diretório, como na construção de URLs, manipulação de arquivos, resolução de caminhos em aplicativos Node.js

//Import path:
const path = require("path");
// Métodos mais comuns oferecidos pelo módulo path incluem:
// 1) path.join(): Combina vários segmentos de caminho em um único caminho completo. Isso é útil para construir caminhos de maneira compatível com a plataforma.
const joinFile = path.join(__dirname, "teste", "adicionandoDiretorio")
console.log(joinFile)

// 2) path.resolve(): Resolve um caminho relativo em um caminho absoluto, levando em consideração o diretório de trabalho atual. É útil para obter caminhos absolutos a partir de caminhos relativos.

// 3) path.basename(): Retorna o nome do arquivo de um caminho, excluindo o diretório.
const baseName = path.basename(__filename);
console.log("Nome do Arquivo = " + baseName)

// 4) path.dirname(): Retorna o diretório de um caminho.
const dirName = path.dirname(__filename)
console.log("Nome do diretório = " + dirName)

// 5) path.extname(): Retorna a extensão de um arquivo de caminho.
const extName = path.extname(__filename)
console.log("Nome da extensão do arquivo = " + extName)

// 6) path.parse(): Divide um caminho em partes, como raiz, diretório, base (nome do arquivo mais extensão) e extensão.
const parseObject = path.parse(__filename)
console.log("Dados do Objeto: " + parseObject)
// 7) path.isAbsolute(): Verifica se um caminho é absoluto.
// 8) path.normalize(): Normaliza um caminho, resolvendo partes como .. e ..
// 9) path.relative(): Calcula o caminho relativo entre dois caminhos.
