import React from 'react'
import { useState } from 'react'

const App = () => {
    const [user,setUser]=useState({name:"rakesh",age:"26"})
    const [name, setName]=useState("rohit")
    const [data, setData]=useState(["kamal","kishan"])
    const updateObjDetails=()=>{
        setUser((prev)=>({
            ...prev,
            age:40,
            name:"keer"
        }))
    }
    const updateArrayValue=()=>{
        // setData((prev)=>({
        //    [ ...prev, ["rajdeep","devendra"]]
        // }))
        setData([...data, ["rajdeep", "madhav"]])
    }
  return (
    
    <div>
        <h1>useState class</h1>
        <p>string name: {name}</p>
        <button onClick={()=>setName("rohit patel")}>changeName</button>
      
        <p>object name: {user.name}</p>
        <p>object age: {user.age}</p>
        <button onClick={updateObjDetails}>changeDetails</button>

        <p>array name1: {data[0]}</p>
        <p>array name2: {data[1]}</p>
        <button onClick={updateArrayValue}>changeArrayValue</button>
    </div>
  )
}

export default App