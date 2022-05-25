import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'
// const data = [1,2]  // if we use data outside the component then child component is not Re render 

const App = () => {
    const[count, setCount]=useState(0)
    // const data = useMemo(()=>[1,2],[]) //in this way we can also prevent child rerendernig but we need to pass child component inside memo function 
   
    // const fetchData=useCallback(()=>[1,2,3,4],[])
    const fetchData=[1,2,3,4]
    // const data = [1,2]
  return (
    <>
    <h1>This is parent component</h1> 
    <h2>Count: {count}</h2>
    <button onClick={()=>{setCount(count+1)}}>ClickMe</button>
    {/* <Child data={data} /> */}
    <Child fetchData={fetchData} />
    {/* <Child/> */}
  
    </>
  )
}

export default App

//if we want to pass function as props then again child component will rerender again then their is solution is that 
// pass that function as useCallback then it prevent child rerender