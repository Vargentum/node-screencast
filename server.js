var user = require('./user')
var data = require('./user/names')

var u1 = new user.User(data.name)
console.log(u1.greet('you'))