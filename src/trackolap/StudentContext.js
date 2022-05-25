import React, { createContext, useState } from "react"

export const studentcontext=createContext()



const StudentProvider= (props) => {
    let [students , setStudents] = useState([]);
  

return (
    <studentcontext.Provider value={[students,setStudents]}>
       {props.children}
    </studentcontext.Provider>
)
}
export default StudentProvider