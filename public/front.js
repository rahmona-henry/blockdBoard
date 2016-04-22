import request from 'superagent'

document.getElementById('submit').addEventListener('click',function(e){
  // e.preventDefault();
  var name= $('form').find("input[name='name']").val()
  var question= $('form').find("textarea[name='question']").val()
  var todo={name:name,question:question}
  console.log(todo)
  request
    .post('http://localhost:3000/')
    .send(todo)
    .end()
})
