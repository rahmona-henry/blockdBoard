import React,{Component} from 'react'
import Form from './Form'
import Lists from './Lists'
import $ from 'jquery'

export default class Layout extends Component{
  constructor(){
    super()
    this.state={
      todos:[{id:1,name:'vicken',question:'i am blocked',time:'2016'},
        {id:2,name:'Gorge',question:'i am blocked too',time:'2017'}]
      }
  }
  getTodos(){
    $.ajax({
      url:'http://localhost:3000/',
      method:'GET',
      success:(data)=>{
        this.setState({todos: data})
      }
    })
  }
  refreshTodo(){
    this.getTodos()
  }

  componentDidMount(){
    this.getTodos()
  }
  render(){
    return (
      <div className="row">
        <Form refreshTodo={this.refreshTodo.bind(this)}/>
        <Lists todos={this.state.todos} />
      </div>
    )
  }
}
