
import React, { useState } from 'react'
import Index from './Index'
const FormControl=()=>{
    const [name, setName]=useState("rakesh")
    const [deptt,setDeptt]=useState("ee")
    const [salary,setSalary]=useState("2000")
    // const [display, setDisplay]=useState("")
    const [newentry, setNewentry] = useState([])
    const[show, setShow]=useState(true)

    const formHandle=(e)=>{
        e.preventDefault()
        if(name && deptt && salary){
        //    setDisplay(name)
           const newData={name,deptt,salary}
           setNewentry([...newentry,newData])
        //    console.log(newentry)
           setName("")
           setDeptt("")
           setSalary("")
           setShow(false)
        }
        else {alert("fill all details")}
    }
  
   return(
     <> 
        {show ? <div><h1>Name: {name} </h1>
        <p>Salary: {salary}</p>
        <p>Deptt: {deptt}</p>

        <form onSubmit={formHandle}>
            Name of Students: <input type='text' name='name' value={name}  onChange={(e)=>setName(e.target.value)} placeholder='enter name'/> <br></br>
            Name of deptt: <input type='text' name='deptt' value={deptt}  onChange={(e)=>setDeptt(e.target.value)} placeholder='enter deptt'/> <br></br>
            Salary: <input type='text' name='slary' value={salary}  onChange={(e)=>setSalary(e.target.value)} placeholder='enter salary'/> <br></br>
            <input type='submit' value='button'/>

        </form></div> : <Index formData={newentry}/>}

        
     </>
   )
}

export default FormControl;