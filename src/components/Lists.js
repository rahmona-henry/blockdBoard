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
            <div className="large-6 columns">

            </div>
          </div>
        </div>
      ) 
  }
}

export default App