import React, {Component} from 'react'
import request from 'superagent'
import $ from 'jquery'
class List extends Component{
  deleteList(e){
    let id=$(e.target).closest('.large-12').data('id')
    request
      .delete('http://localhost:3000/'+id)
      .end(()=>{
        this.props.refreshTodo()
      })

  }
  render(){
    let {name,question,time,id}= this.props.todo
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
            <div className="large-12 columns" data-id={id}>
                <div className="row" id="individualIssue">
                    <div className="large-3 columns">
                    <span>Solved?  </span><input name="your_name" value="your_value" type="checkbox" onChange={this.deleteList.bind(this)}/>
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
