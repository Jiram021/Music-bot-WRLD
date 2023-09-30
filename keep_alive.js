var http = require('http');

http.createServer(function(req, res) {
  res.write("Bot ON!!!");
  res.end();
}).listen(1212);
