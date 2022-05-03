import React, { useEffect, useState } from 'react'

const UseEffectTest = () => {
const [a, setA]=useState("abc")
const [b, setB]=useState("pqr")
useEffect(()=>{
    console.log("hello use effect hook")
})
// in this way useEffect working as componentDidMount and componentDidUpdate

useEffect(()=>{
    console.log("hello use effect hook")
}, [])
// in this way working like componentDidMount only

useEffect(()=>{
    console.log("hello use effect hook")
}, [a])

// in this way componentDidMount,componentDidUpdate work only when state a is change

useEffect(()=>{
   console.log("inside useEffect hook")
   return function cleanup(){
    console.log("useEffect behaving like componentWillUnmount")
   }
})
//componentWillUnmount: cleanup function in useEffect
  return (
    <div>
        <h1>this is UseEffect class </h1>
        <button onClick={()=>{setA("abcd")}}>value of state a: {a}</button>
        <button onClick={()=>{setB("abcd")}}>value of state b: {b}</button>
    </div>
  )
}

export default UseEffectTest

// useeffect is an alternative of lifcycle method
// componentDidMount, componentDidUpdate, componentWillUnmount is the most important lifecycle meethod
// useEffect hook accepts first parameter ass a callback function and second parameter is dependency array
// if we do not want that useEffect should run like a componentDidUpdate then pass an empty dependency array
// it is used when we want to make server call

//cleanUp function 
// this is the function gets executed when the onent is unmounted from the screen this is mostly used for memory leakescomp

// how the useEffect can be execcuted like componentDidUpdate only for one state variable : 
// pass the state variable for which we want to execute useEffect in the dependency Array
