import React, { useEffect } from 'react'
import axios from 'axios'



const Component = () => {
    useEffect(()=>{
            axios.get("http://localhost:3000/user").then((res)=>{
                console.log(res)
            })

            axios.post("")
    })
  return (
    <div>
        <h2>this is testing component</h2>
    </div>
  )
}

export default Component