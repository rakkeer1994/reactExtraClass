import React from 'react'
import HocOneTwo from './HocOneTwo'
const Two=(props)=>{
    const {count, increment}=props
    return(
        <>
        <h1>this is Two component</h1>
        <h2>CountMouseHover:{count}</h2>
        <button onMouseOver={increment}>CountMouseHover::</button>
        </>
    )
}

export default HocOneTwo(Two)