import React, { useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { studentcontext } from './StudentContext';
   const Student = () => {


    let [students,setStudents]=useContext(studentcontext)
   //  console.log(students)

  let navigate=useNavigate();
 
 

   const DeletEmployee=(id)=>{
       console.log(students)
     setStudents( students.filter(val=>{return val.id !==id}))
   }
   return (
   <div>
  

      <div className='cont-student'>
        <div style={{fontSize:"1.6rem", fontWeight:"bold"}}>Student Details</div>
         <div className='btn'><Link to="/Addstudent"><button className='mem-btns' >Add New </button> </Link></div>
        
        </div>
        <div className='plotData'><div>First Name</div> <div>Last Name</div> <div>ContactNum</div> <div> Designation</div> <div> Action</div></div>
          {students.map((row) => {
             return (
                 <>
                 <div className='plotData'>
                 <div>{row.Name}</div>
                 <div>{row.Lname}</div>
                 <div>{row.ContactNum}</div>
                 <div>{row.Designation}</div>
                 <div><Link to={`/edit/${row.id}`}><button className='edit-btn' > EDIT </button></Link>
                 <button className='edit-btn' onClick={()=>DeletEmployee(row.id)}>DELETE</button>
                 </div>
                 </div>
                 </>
             )
          })}
            
    </div> 
   )}

export default Student