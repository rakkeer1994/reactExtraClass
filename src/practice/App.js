import React, { useState } from 'react'
import Index from './index'
const MakeDiv=()=>{
    return(
        <>
        <h1>this is default div</h1>
        </>
    )
}

const DynamicDiv=()=>{
    return(
        <>
        <h1>this is dynamically made div</h1>
        </>
    )
}

const App=()=>{
    const [changes,setChanges]=useState(true)
    return(
        <>
        <button onClick={()=>{setChanges(!changes)}}>Click me</button>
        <Index/>
         {changes ? <MakeDiv/> : <DynamicDiv/>}
        </>
    )
}

export default App