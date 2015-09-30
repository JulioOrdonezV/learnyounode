var http = require('http');
var concatStream = require('concat-stream');
var textArray = ["","",""];
var count = 0;


callback = function (index){
  return function (response){
    response.pipe(concatStream(function(data){
    textArray[index] = data.toString();
    count = count + 1;
    if (count == 3){
      console.log(textArray[0]);
      console.log(textArray[1]);
      console.log(textArray[2]);
     }
    }));
  };
}

http.get(process.argv[2], callback(0));

http.get(process.argv[3], callback(1));

http.get(process.argv[4], callback(2));

