var url = require('url')
var debug = require('debug')('server:request')

function request (req, res) {
  var parsedUrl = url.parse(req.url, true);
  debug("URL Parsed")
  if (parsedUrl.pathname === '/echo' && parsedUrl.query["Message"]) {
    res.end(parsedUrl.query["Message"])
  }
  else {
    res.statusCode = 404
    res.end('Incorrect result.')
  }
}
module.exports = request;