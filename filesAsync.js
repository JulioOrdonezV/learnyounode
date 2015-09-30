var fs = require('fs');

var buf;

fs.readFile(process.argv[2],
	    function (err, data)
	    {
		buf = data;
		var str = buf.toString();
		var total = str.split('\n');
		console.log(total.length - 1);
	    });
