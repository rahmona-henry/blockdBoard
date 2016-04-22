import React, {Component} from 'react'

class Form extends Component{
  render(){
    return(
            <div className="large-6 columns">
              <form className="form" action="/" method="post">
              <label>Name</label>
              <input type='text' name='name'/>
                <label>What is your issue (optional)?</label>
                  <textarea name="issue"></textarea>
                  <input type="submit" name="add" value="Submit" />
              </form>
            </div>
      )
  }
}

export default Form
