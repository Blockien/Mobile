const _ = require('lodash');

const numeros = [1, 2, 2, 3, 4, 4, 5];

const arrayOrdenado = _.sortBy(numeros);
console.log('Array Ordenado:', arrayOrdenado);

const arrayUnico = _.uniq(numeros);
console.log('Elementos Únicos:', arrayUnico);

const numerosPares = _.filter(numeros, num => num % 2 === 0);
console.log('Números Pares:', numerosPares);

const arrayDobrada = _.map(numeros, num => num * 2);
console.log('Números Dobrados:', arrayDobrada);

const soma = _.sum(numeros);
console.log('Soma dos Elementos:', soma);
