var knex = require('knex')( require('../knexfile')[process.env.NODE_ENV || 'development'])


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
}


selectAll('blocks')
