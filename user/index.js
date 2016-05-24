function User (name) {
  this.name = name
}

User.prototype.greet = function(who) {
  return this.name + " greets " + who
}

console.log('user is required')

// exports.User = User // add as method
module.exports = User // rewrite exports prop