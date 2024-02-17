var http = require('http');
var dt = require('./myowndate');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var urlparse = url.parse(req.url,true).query;
  res.write('1st string::'+urlparse.name+'\r\n');
  res.write('today date::'+ dt.myDateTime())
  res.end();
}).listen(8080);