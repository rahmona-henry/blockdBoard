import React, {Component} from 'react'

class List extends Component{

  render(){
    let {name,question,time}= this.props.todo
    return(
          <div className="row">
            <div className="large-6 columns">
                <p className="student-name">{name}</p>
                <p className="student-issue">{question}</p>
                <p className="time">{time}</p>
            </div>
          </div>
      )
  }
}

export default List
