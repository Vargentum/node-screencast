var http = require('http')
var url = require('url')

var server = new http.Server()
server.listen(9024, '127.0.0.1')

server.on('request', function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/echo' && parsedUrl.query["Message"]) {
    res.end(parsedUrl.query["Message"])
  }
  else {
    res.statusCode = 404
    res.end('Incorrect result.')
  }
})