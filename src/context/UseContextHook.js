import React, {useContext} from 'react'

import { usecreateContext } from './UserContext' 
const UseContextHookTest = () => {
  const [user,setUser]=useContext(usecreateContext)
  const updateAge=()=>{
         setUser((prevStat)=>{
           return {
             ...prevStat,
             age:42
           }
         })
  }
  return (
    <div>
        <h1>this is UseContextHooktest</h1>
        <h4>{user.id} || {user.name} || {user.age} || {user.salary}</h4>
        <button onClick={updateAge}>update age</button>
    </div>
  )
}

export default UseContextHookTest

// useContext hook 
// this hook is used to use context api
// prop drilling: if we have 4 component and we want to pass data from compo 1 to 4 then we can not directly pass data from 1 to 4
// it passes like 1 to 2 and then 2 to 3 and then 4 compo. bt the data will be use by 1st and 4th compo so over here
// 2 and 3rd compo recieving props data which even they are not used,this is known as propdrilling
// then solution of prop drilling is: context api

// context API: let we store the data at single place and then in watsover component we want to recieve data we need to make sure that
// component wrapped with context API 

// howto use context api data in the component we need useContex hook