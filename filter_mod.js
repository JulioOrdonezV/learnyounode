var fs = require('fs');
var path = require('path');

module.exports = function (dir, filter, callback){

fs.readdir(dir, function (err, list){
    if(err)
        return callback(err);
    list = list.filter(function(file){
        return path.extname(file) === '.'+filter;
    });  
  //  for(var i = 0; i < list.length; i++){
  //      if (path.extname(list[i]) == '.'+ filter)
  //          listA = listA + (list[i]);
  //  }
    callback(null, list);
});
}
