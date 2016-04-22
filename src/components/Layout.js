import React,{Component} from 'react'
import Form from './Form'
import Lists from './Lists'
import $ from 'jquery'

export default class Layout extends Component{
  constructor(){
    super()
    this.state={
      todos:[{id:1,name:'vicken',issue:'i am blocked',time:'2016'},
        {id:2,name:'Gorge',issue:'i am blocked too',time:'2017'}]
      }
  }
  // getTodos(){
  //   $.data({
  //     url:'/',
  //     method:'get',
  //     success:(data)=>{
  //       this.setState({todos:data})
  //     }
  //   })
  // }
  // componentDidMount(){
  //   this.getTodos()
  // }
  render(){
    return (
      <div className="row">
        <Form />
        <Lists todos={this.state.todos} />
      </div>
    )
  }
}
