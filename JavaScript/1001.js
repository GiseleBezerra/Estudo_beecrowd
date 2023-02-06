var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

a = parseInt(lines.shift())
b = parseInt(lines.shift())
x = a + b

console.log(`X = ${x}`)
