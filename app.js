var http = require('http');
var dt = require('./myowndate')

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.write('today date::'+ dt.myDateTime())
  res.end();
}).listen(8080);