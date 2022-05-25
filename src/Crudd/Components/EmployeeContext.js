import React, { useState, createContext } from 'react'

export const EmployeeContext = createContext();

export const EmployeeContextProvider = (props) => {

    const [employeeData, setEmployeeData] = useState([]);

  return (
        <EmployeeContext.Provider value= {[employeeData, setEmployeeData] }>
            {props.children}
        </EmployeeContext.Provider>
  )}