var http = require('http')
var debug = require('debug')('server')

var server = new http.Server()
server.listen(9024, '127.0.0.1')

debug("Listened")

server.on('request', require('../modules/request'))
