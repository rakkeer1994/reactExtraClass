import React, { useEffect } from 'react'
import axios from 'axios'



const Component = () => {
    useEffect(()=>{
            axios.get("http://localhost:3000/user").then((res)=>{
                console.log(res)
            })

            axios.post("http://localhost:3001/addUser",{name:"kumar", age:24}).then((res)=>{
              console.log(res)
            })
    })
  return (
    <div>
        <h2>this is testing component</h2>
    </div>
  )
}

export default Component