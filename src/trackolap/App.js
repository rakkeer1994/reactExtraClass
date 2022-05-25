import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

import Student from "./Student"
import StudentProvider from "./StudentContext"
import Addstudent from "./AddStudent"
import EditStudent from "./EditStudent"
import './style.css'

const App =() => {
    return(
        <StudentProvider>
        <div className="background">
        <Router>
            <Routes>
            <Route path="/" element={<Student />} />
            <Route path="/Addstudent" element={<Addstudent />} />
             <Route path="/edit/:id" element={<EditStudent/>}/>
            </Routes>
        </Router>
        </div>
        </StudentProvider>
    )

}
export default App