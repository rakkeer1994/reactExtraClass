import React from 'react'
import HocOneTwo from './HocOneTwo'
const One=(props)=>{
    const {count, increment}=props
    return(
        <>
        <h1>this is one component</h1>
        <h2>CountOnclick:{count}</h2>
        <button onClick={increment}>CountOnclick::</button>
        </>
    )
}

export default HocOneTwo(One)