import React, { useState } from 'react'



const initialUser={name:"rakesh",lname:"keer",address:"ratlam"}
const initialArray=['rakesh','kamal','rohit']
const App = () => {
    const [user,setUser]=useState(initialUser)
    const [name,setName]=useState(initialArray)
    const changeFunc=()=>{
        setUser((prev)=>({
           ...prev,
           name:"rakesh kumar",
           address:"Mandsour"
        }))
    }
    const changeArray=()=>{
        const [n1,n2,n3]=name;
        setName((prev)=>({
            ...prev,
        
        }))
    }
  return (
    <div>
        <div>
        <h1>Name:{user.name} || Adress:{user.address}</h1>
        <button onClick={changeFunc}>ChangeDetails</button>
        </div>
        <div>
        <h1>NameList ||{name.map((val)=>{
            return <p>{val}</p>
        })} </h1>
        <button onClick={changeArray}>ChangeDetails</button>
        </div>
    </div>
  )
}

export default App