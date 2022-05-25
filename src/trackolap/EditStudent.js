import React, { useContext,useState,useEffect } from 'react'
import { useNavigate ,useParams,} from 'react-router-dom';
 import {studentcontext} from "./StudentContext"
import { Link } from 'react-router-dom';


 const EditStudent = () => {
  let navigate=useNavigate();
  const [students,setstudents]=useContext(studentcontext)
  let  {id}=useParams();
let [studentsAdd ,setStudentsAdd]=useState({
        id:"",
        Name:"",
        Lname:"",
        ContactNum:"",
        Designation:"",
  })

 
useEffect(() => {
  students.forEach((val) => {
      if (val.id === id) {
          setStudentsAdd({
              Name: val.Name,
              Lname: val.Lname,
              ContactNum: val.ContactNum,
              Designation: val.Designation,
          });
      }
  });
}, [id, students]);

const handleChange = (event) => {
  setStudentsAdd({ ...studentsAdd, [event.target.name]: event.target.value });
};

const handleEditStudent=(event)=>{
    event.preventDefault()
    if(studentsAdd.ContactNum.length !== 10){
      alert("Number should be 10 digit")
    } 
      else {
        setstudents(students.map((student)=>
      
        student.id===id ?
         {
          id:id ,
          Name:studentsAdd.Name,
          Lname:studentsAdd.Lname,
          ContactNum:studentsAdd.ContactNum,
          Designation:studentsAdd.Designation,

        } : student
        ) 
      );

      }
     navigate("/")
  };
return (
     
    <div className='form-cont'>
       <div className='formHeading'> <div><h1>Update Student Details</h1></div> <div><Link to="/"><button type="submit" className="btnCross" >X</button></Link></div> </div>
    <form onSubmit={handleEditStudent}>
    <div className="detail1">
    <label for="name" className="form-label">First Name</label>
    <input type="text" id="name" className="input-style form-control1" name="Name" required placeholder='Enter Your First Name' value={studentsAdd.Name} onChange={handleChange} />
    
    </div>
    <div className="detail2">
    <label for="lname" className="form-label">Last Name</label>
    <input type="text" id="lname" className="input-style form-control2" name="Lname" required placeholder='Enter Your Last Name' value={studentsAdd.Lname} onChange={handleChange}/>
    </div>
    <div className="detail3">
    <label className="form-check-label" for="ContactNum">Contact Number</label>
    <input type="text" id="ContactNum" className="input-style form-control3" name="ContactNum" required placeholder='Enter Your Number' value={studentsAdd.ContactNum} onChange={handleChange}/>
    
    </div>
    <div className="detail4">
    <label for="Designation" className="form-label">Designation</label>
    <input type="text" id="Designation" className="input-style form-control4" name="Designation" required placeholder='Enter Your Designation' value={studentsAdd.Designation} onChange={handleChange}/>
    </div>
    <div className='Form-btns'>
    <button type="submit" className="btn1" >Update</button>
    <Link to="/"><button type="submit" className="btn1" >Cancel</button></Link>
    </div>
    </form>
    </div>
    
   
   )
 }

export default EditStudent