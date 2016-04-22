'use strict';
var knex = require('knex')( require('./knexfile')[process.env.NODE_ENV || 'development'])
const Hapi = require('hapi');
// var selectAll = require('./db/db')

const server = new Hapi.Server();
server.connection({
	port: process.env.PORT || 3000,
	routes: { cors: true }
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        selectAll('blocks',function(data){
					reply(data)
				});
    }
});

server.route({
    method: 'POST',
    path: '/',
    handler: function (request, reply) {
        console.log(request.query, "this is request.body")
        saveBlock(request.query)
        reply();
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});



function selectAll(tableName,callback){
  knex.select().table(tableName)
  .then(function(data){
    console.log(data)
    callback(data)
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
