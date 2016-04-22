
exports.up = function(knex, Promise) {
  console.log('create a table')
  return knex.schema.createTableIfNotExists('blocks', function(table){
    table.increments();
    table.string('name');
    table.string('question');
    table.string('time');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blocks').then(function(){
    console.log('blocks was dropped')
  })

};
