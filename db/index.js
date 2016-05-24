var phrases;

function db() {}

db.connect = function() {
  phrases = require('./phrases')  
}

db.getPhrase = function (phrase) {
  if (!phrases[phrase]) {
    throw new Error('There is no phrase ' + phrase)
  } else {
    return phrases[phrase]
  }
}

module.exports = db