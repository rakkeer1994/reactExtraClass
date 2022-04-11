import React, { useState } from 'react'

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
         {changes ? <MakeDiv/> : <DynamicDiv/>}
        </>
    )
}

export default App