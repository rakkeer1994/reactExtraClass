// import React, { useState } from 'react'

// const Test = () =>{
//     const[count, setCount] = useState(0)
//     const[count1, setCount1] = useState(0)
//     const clickHandle=()=>{
//       setCount(count+1)
//     }
//     const clickHandleMinus=()=>{
//         setCount1(count1-1)
//       }
//     return(
//      <>
//         <h1> count:{count}</h1>
//         <h1> countMinus:{count1}</h1>
//         <button onClick={clickHandle}>Click Me</button>
//         <button onClick={clickHandleMinus}>Click Me</button>
//      </>

//     )
// }

// export default Test


import React from 'react'
import { Component } from 'react'

export default class Test extends Component{
    constructor(){
        super()
        this.state={
            count:0,
            count1:0
        }
    }
     clickHandle=()=>{this.setState({count:this.state.count+1})}
    render(){
        return(
            <>
                     <h1> count:{this.state.count}</h1>
                     <h1> countMinus:{this.state.count1}</h1>
                     <button onClick={this.clickHandle}>Click Me ++</button>
                     <button onClick={()=>this.setState({count1:this.state.count1-1})}>Click Me --</button>
                  </> 
        )
    }
}