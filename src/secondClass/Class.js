




import React, { Component } from 'react'

 class ClassCompo extends Component {
    constructor(){
        super()
        this.state={
            count:100
          }
    }
  render() {
    return (
      <div>
          <h1>this is class component</h1>
          <h2>Counter :{this.state.count}</h2>
          <button onClick={()=>{this.setState({count:this.state.count-10})}}>CountDec</button>
      </div>
    )
  }
}

export default ClassCompo