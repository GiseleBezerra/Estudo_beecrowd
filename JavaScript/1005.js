var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

peso1 = 3.5
peso2 = 7.5
soma_pesos = peso1 + peso2
a = parseFloat(lines.shift()) * peso1
b = parseFloat(lines.shift()) * peso2
media = (a + b) / soma_pesos

console.log(`MEDIA = ${media.toFixed(5)}`)
