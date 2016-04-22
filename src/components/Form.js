import React, {Component} from 'react'
import $ from 'jquery'
import request from 'superagent'
class Form extends Component{

  postData(e){
    e.preventDefault()
    request
      .post('http://localhost:3000/')
      .send({ name: $("input[name='name']").val(), question: $("textarea[name='question']").val(),time:Date.now() })
      .end()
    this.props.refreshTodo()
    }

  render(){
    return(
            <div className="large-6 columns">
              <form className="form">
              <label>Name</label>
              <input type='text' name='name'/>
                <label>What is your issue (optional)?</label>
                  <textarea name="question"></textarea>
                  <button onClick={this.postData.bind(this)} class="button">Submit</button>
              </form>
            </div>
      )
  }
}

export default Form
