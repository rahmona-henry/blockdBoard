'use strict';
var knex = require('knex')( require('./knexfile')[process.env.NODE_ENV || 'development'])
const Hapi = require('hapi');
var Path = require('path')
// var selectAll = require('./db/db')
var Inert = require('inert')
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
        saveBlock(request.payload)
        reply();
    }
});

server.route({
    method: 'DELETE',
    path: '/{id}',
    handler: function (request, reply) {
        deleteBlock('blocks',request.params.id)
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
  knex.select().table(tableName).orderBy('time', 'desc')
  .then(function(data){
    console.log(data)
    callback(data)
  })
}

function deleteBlock(tableName,id){
  knex(tableName).where('id',id).del()
  .then(function(){
    console.log('data has been delete')
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
