module.exports = function(module) {
  return function(/*params*/) {
    var args = [module.filename].concat(Array.prototype.slice.call(arguments))
    console.log.apply(console, args)
  }
}