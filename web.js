var express = require('express');
var fs = require('fs');
//var findit = require('findit');

var app = express.createServer(express.logger());
var buffer = fs.readFileSync('/index.html');

var fileString = buffer.toString();

app.get('/', function(request, response) {
  response.send(fileString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
