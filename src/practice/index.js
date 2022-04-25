import React, { useState } from 'react'

const Index = () => {
    const [name, setName]=useState()
    const [age, setAge]=useState()
    const [data, setData]=useState([])
    
    const formHandle=(e)=>{
              e.preventDefault()
              const newData={name,age}
              setData([...data, newData])
              console.log(data)
    }
  return (
    <div>
     <form onSubmit={formHandle}>
          Name: <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='enter name'/> <br></br>
          Age: <input type='text' name='name' value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder='enter name'/>
         <br></br> <input type='submit' />
     </form>

    </div>
  )
}

export default Index