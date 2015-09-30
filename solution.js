var filter = require('./filter_mod.js');
var dir = process.argv[2];
var string = process.argv[3];

filter(dir, string, function (err, list){
if(err)
return console.error('There was an error:', err);

list.forEach(function(file){
console.log(file);
});
});

