import React, {Component} from 'react'

class List extends Component{

  render(){
    let {name,issue,time}= this.props.todo
    return(
            <div className="large-12 columns">
                <div className="row" id="individualIssue">
                    <div className="large-3 columns">
                    <input name="your_name" value="your_value" type="checkbox"/>

                      <h4 className="student-name">{name}</h4>
                      <b><p className="time">{time}</p></b>
                    </div>
                    <div className="large-9 columns">
                      <p className="student-issue">{issue}</p>
                    </div>
                </div>
            </div>
      )
  }
}

export default List
