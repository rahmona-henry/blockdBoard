var db = require('./db.js')


var testData = {
  name: "george",
  questions: "struggling with sql",
  time: "1200"
}

db.saveBlock(testData)
db.selectAll('blocks')
