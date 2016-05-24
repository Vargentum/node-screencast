var db = require('db')

function User (name) {
  this.name = name
}

User.prototype.says = function(who) {
  return this.name + " says " + who + "."
}

console.log(new User('Tom').says('init'))

module.exports = User