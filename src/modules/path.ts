import path from "path";
require("../modules/fs");

// Retorna o nome do arquivo
console.log(path.basename(__filename));

// Retorna o nome do diretório
console.log(path.dirname(__filename));

// Retorna a extensão do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// Concatenar caminhos
console.log(path.join(__dirname, "teste", "Hello World!"));

// Retorna o caminho do diretório atual
console.log(__dirname);
