import selectAll from './db'

var testData = {
  name: "george",
  questions: "struggling with sql",
  time: "1200"
}

selectAll.saveBlock(testData)
