import React,{Component} from 'react'
import Form from './Form'
import Lists from './Lists'
import $ from 'jquery'

export default class Layout extends Component{
  constructor(){
    super()
    this.state={
      todos:[{id:1,name:'vicken',issue:'i am blocked'},
      {id:2,name:'Gorge',issue:'i am blocked too'}]
    }
  }
  getTodos(){
    $.data({
      url:'/',
      method:'get',
      success:(data)=>{
        this.setState({todos:data})
      }
    })
  }
  componentDidMount(){
    this.getTodos()
  }
  render(){
    return (
      <div>
        <Form/>
        <Lists todos={this.status.todos}/>
      </div>
    )
  }
}
