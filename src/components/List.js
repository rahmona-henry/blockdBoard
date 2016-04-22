import React, {Component} from 'react'

class List extends Component{
  // deleteList(){
  //   //post rest to server to delete this one
  //   request
  //     .post('http://localhost:3000/'+id)
  //     .end()
  // }
  render(){
    let {name,question,time}= this.props.todo
          var date = new Date(time * 1000),
          datevalues = [
             date.getFullYear(),
             date.getMonth()+1,
             date.getDate(),
             date.getHours(),
             date.getMinutes(),
             date.getSeconds(),
          ];
    return(
            <div className="large-12 columns">
                <div className="row" id="individualIssue">
                    <div className="large-3 columns">
                    <input name="your_name" value="your_value" type="checkbox" />
                      <h4 className="student-name">{name}</h4>
                      <b><p className="time">{datevalues[3]}:{datevalues[4]}:{datevalues[5]}</p></b>
                    </div>
                    <div className="large-9 columns">
                      <p className="student-issue">{question}</p>
                    </div>
                </div>
            </div>

      )
  }
}

export default List
