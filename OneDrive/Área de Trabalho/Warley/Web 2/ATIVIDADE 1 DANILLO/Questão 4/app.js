const fs = require('fs');
const chalk = require('chalk');

fs.readFile('arquivo.md', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    

    console.log(textoFormatado);
});
