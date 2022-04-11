
// import React, { useState } from 'react'

// const Index = () => {
//     const [name, setName]=useState("")
//     const [age, setAge]=useState("")
//     const [salary, setSalary]=useState("")
//    console.log(name, age, salary)
//     const details={
//         Name:"",
//         Age:"",
//         Salary:""
//     }

//     const submitForm=(e)=>{
//        e.preventDefault();
       
//     }
//   return (
//     <div>
       
//        Name: <input type='text' name='name'  value={name} onClick={(e)=>{setName(e.target.value)}}/>
//        Age: <input type='text'  name='age' value={age} onClick={(e)=>{setAge(e.target.value)}}/>
//        Salary: <input type='text' name='salary'  value={salary} onClick={(e)=>{setSalary(e.target.value)}}/>
       
//     </div>
//   )
// }

// export default Index
 import React from 'react'
 
 const Index = (props) => {
     const reciData=props.formData;
     console.log(reciData)
   return (
     <div>
         <h1>this is index file received data from props</h1>
         
         {reciData.map((mapVal)=>{
             return(
                 <>
                 <ul>
                 {console.log(mapVal.name)}
                 <li>Name: {mapVal.name} || Salary:{mapVal.salary} || deptt:{mapVal.deptt}</li>
                 </ul>
                 </>
             )
         })}
 
     </div>
   )
 }
 
 export default Index