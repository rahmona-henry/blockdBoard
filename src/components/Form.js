import React, {Component} from 'react'
import $ from 'jquery'
import request from 'superagent'
class Form extends Component{

  postData(e){
    //e.preventDefault();
    request
      .post('http://localhost:3000/')
      .send({ name: $("input[name='name']").val(), question: $("textarea[name='question']").val() })

    }

  render(){
    return(
            <div className="large-6 columns" action="http://localhost:3000/" method="post" type="multipart/form-data">
              <form className="form">
              <label>Name</label>
              <input type='text' name='name'/>
                <label>What is your issue (optional)?</label>
                  <textarea name="question"></textarea>
                  <input type="submit" name="add" value="Submit" id='submit'  />
              </form>
            </div>
      )
  }
}

export default Form
