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
        console.log('data from server',data)
        this.setState({todos: data})
      }
    })
  }
  componentDidMount(){
    this.getTodos()
  }
  render(){
    return (
      <div className="row">
        <Form />
        <Lists todos={this.state.todos} />
      </div>
    )
  }
}
