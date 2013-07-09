var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var file = '/index.html';

var fileContent = buf.toString(fs.readFileSync(file));

app.get('/', function(request, response) {
  response.send(fileContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
