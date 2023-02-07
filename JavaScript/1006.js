var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

peso1 = 2
peso2 = 3
peso3 = 5
soma_pesos = peso1 + peso2 + peso3
a = parseFloat(lines.shift()) * peso1
b = parseFloat(lines.shift()) * peso2
c = parseFloat(lines.shift()) * peso3
media = (a + b + c) / soma_pesos

console.log(`MEDIA = ${media.toFixed(1)}`)
