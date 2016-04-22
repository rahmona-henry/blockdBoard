
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('blocks').del(),

    // Inserts seed entries
    knex('blocks').insert({name: 'Jason', question: 'knex joins', time: '11.30'}),
    knex('blocks').insert({name: 'Mary', question: 'postgres on heroku', time: '12:00'}),
    knex('blocks').insert({name:'Jane', question: 'terminal commands', time: '12.15'})
  );
};
