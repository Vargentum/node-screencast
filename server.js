var db = require('./db')
var User = require('./user')

db.connect()

function run() {
  var u1 = new User('John')
  console.log(u1.says(db.getPhrase('hello')))
}

// Allow to work both as module and as node executable
if (module.parent) {
  exports.run = run
} else {
  run()
}