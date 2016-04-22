import React, {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {count: 0}
  } 

  incrementCount(){
    this.setState({count: this.state.count +1})
  }

  render(){
    return(
        <div>
          <div className="row">
            <div className="large-6 columns"
              <form className="form" action="/" method="post" >
                <label>What is your issue (optional)?</label>
                  <textarea name="issue"></textarea>
                  <input type="submit" name="add" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      ) 
  }
}

export default App