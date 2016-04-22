import React, {Component} from 'react'
import List from './List'

class Lists extends Component{

  render(){
    const {todos}= this.props
    const Todos= todos.map((todo)=>{
      if(todo.name){
        return <List todo={todo} key={todo.id}/>;
      }
    })
    return(
            <div className="large-6 columns" id="issueBox">
              <div>{Todos}</div>
            </div>
      )
  }
}

export default Lists
