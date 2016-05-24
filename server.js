var log = require('./logger')(module)
var User = require('./user')

var db = require('./db')
db.connect()

function run() {
  var u1 = new User('John')
  log(u1.says(db.getPhrase('hello')))
}

// Allow to work both as module and as node executable
if (module.parent) {
  exports.run = run
} else {
  run()
}