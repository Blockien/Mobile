const { readJsonFile, writeJsonFile } = require('./fileManager');

const filePath = 'dados.json';
const novosDados = { nome: 'João Silva', idade: 30 };

// Escrever novos dados no arquivo JSON
writeJsonFile(filePath, novosDados);

// Ler os dados do arquivo JSON
const data = readJsonFile(filePath);
console.log('Dados Lidos:', data);
