import React from 'react'

const UseReducerHook = () => {
  return (
    <div>
        <h1>UseReducerHook explaination</h1>
    </div>
  )
}

export default UseReducerHook

// why useReducer
//useState v/s useReducer
// useState hook is easy to use when we are having primitive data type like num,string etc. it is still fine to 
// useState at some point for the non-primitive data types like objects when these objects having 3-4 key value pairs
// but generally we will be having big complex objects containing lots of key value pairs so to update the state, prevstate
// concept becoms complex
// and then to make it easy we use useReducer hook
// useReducer: it takes two arguments, state and reducer function
// this reducer function will be responsible to update the state variable.
// this reducer function takes two parameters state and action