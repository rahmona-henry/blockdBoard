var knex = require('knex')
// ( require('../knexfile')[process.env.NODE_ENV || 'development'])


function selectAll(tableName){
  knex.select().table(tableName)
  .then(function(data){
    console.log(data)
    return data
  })
}


function saveBlock(data){
  knex('blocks').insert({
    name: data.name,
    question: data.question,
    time: data.time
  })
  .then(function(err){
    if(err){
      console.log(err)
    }
    else{
      console.log("data saved")
      return
    }
  })
}



module.exports = {
  selectAll: selectAll,
  saveBlock: saveBlock
}
