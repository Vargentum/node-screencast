function User (name) {
  this.name = name
}

User.prototype.says = function(who) {
  return this.name + " says " + who + "."
}

module.exports = User