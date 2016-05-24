var User = require('./user')
var data = require('./user/names')

function run() {
  var u1 = new User(data.name)
  console.log(u1.greet('you'))
}

// Allow to work both as module and as node executable
if (module.parent) {
  exports.run = run
} else {
  run()
}