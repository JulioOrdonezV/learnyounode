var http = require('http');
var concatStream = require('concat-stream');

http.get(process.argv[2], function (response){
  response.pipe(concatStream(function(data){
    var text = data.toString();
    console.log(text.length);
    console.log(text);
  }));
});

