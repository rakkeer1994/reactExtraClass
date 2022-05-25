import React,{createContext,useState} from 'react'
export const usecreateContext=createContext()
const UserContext = (props) => {
const [user, setUser]=useState({id:1,name:"rakesh",age:32,salary:"30k"})
  return (
    <>
    <h2>this is UserContext component</h2>
     <usecreateContext.Provider value={[user,setUser]}>
         {props.children}
     </usecreateContext.Provider>
    </>
  )
}

export default UserContext

// in this file we are creating a context fpr user
// very first step is that we need to create context using createContext function
// we will be creating a functional component which will return Context.Provider
// props.children is a component