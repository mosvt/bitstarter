var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var file = '/index.html';
//var buffer = new Buffer(fs.readFileSync(file));

//var fileContent = buf.toString(buffer);

app.get('/', function(request, response) {
  response.send("eat my shorts");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
