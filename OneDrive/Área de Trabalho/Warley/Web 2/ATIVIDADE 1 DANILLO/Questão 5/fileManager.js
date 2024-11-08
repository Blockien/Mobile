// gerenciadorDeArquivos.js
const fs = require('fs');

function lerArquivoJson(caminhoArquivo) {
    const dados = fs.readFileSync(caminhoArquivo, 'utf8');
    return JSON.parse(dados);
}

function escreverArquivoJson(caminhoArquivo, dados) {
    const jsonData = JSON.stringify(dados, null, 2);
    fs.writeFileSync(caminhoArquivo, jsonData, 'utf8');
}

module.exports = { lerArquivoJson, escreverArquivoJson };
