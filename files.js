var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var total = str.split('\n');

console.log(total.length - 1);
