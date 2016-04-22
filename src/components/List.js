import React, {Component} from 'react'

class List extends Component{

  render(){
    let {name,issue,time}= this.props.todo
    return(
        <div>
          <div className="row">
            <div className="large-6 columns">
                <p className="student-name">{name}</p>
                <p className="student-issue">{issue}</p>
                <p className="time">{time}</p>
            </div>
          </div>
        </div>
      )
  }
}

export default List
