import React, { Component,PureComponent } from 'react'

class PureCompo extends PureComponent{
  render(){
    console.log("purecompo render")
    return(
      <>
      <>pure component</>
      </>
    )
  }
}

class NormalCompo extends Component{
  render(){
    console.log("NormalCompo render")
    return(
      <>
      <>NormalCompo component {this.props.count}</>
      </>
    )
  }
}

export class App extends PureComponent {
  constructor(){
    super()
    this.state={count:10}
  }
  render() {
    console.log("component render")
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:5})}}>ChangeCount</button> <br></br> <br></br>
        <PureCompo count={this.state.count}/> <br></br> <br></br>
        <NormalCompo count={this.state.count}/>
      </div>
    )
  }
} 

export default App