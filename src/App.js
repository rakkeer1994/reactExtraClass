import React, { useEffect } from 'react'
import axios from 'axios'
const App = () => {
   
   
   
    useEffect(()=>{
        // axios.post("http://localhost:5000/login",{"email":"prep@gmail.com", "password":"12345"}).then((res)=>{
        //   console.log(res.data)
        //   localStorage.setItem("jwtToken", res.data.token)
        // })
        const token=localStorage.getItem("jwtToken")
        axios.get("http://localhost:5000/articles", {headers:{"Authorization":`bearer ${token}`}}).then((res)=>{
            console.log(res)
        })
    })
  return (
    <div>
        <h1>this is for api testing</h1>
    </div>
  )
}

export default App