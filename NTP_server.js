var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
  date = new Date();
  dateStr = fmtDate(date);
  socket.end(dateStr);
});

function fmtDate(date){
  year = date.getFullYear();
  month = fmtMonth(date);
  day = fmtDay(date);
  time = fmtTime(date);

  return year + '-' + month + '-' + day + ' ' + time + '\n';
}

function fmtMonth(date){
  month = ((date.getMonth() < 9) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1));
  return month;
}

function fmtDay(date){
  day = ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate());
  return day;
}

function fmtTime(date){
  time = ((date.getHours() < 10) ? '0' + date.getHours() : date.getHours()) + 
    ':' + ((date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes());
  return time;
}

server.listen(port);
console.log("listening on port " + port)
