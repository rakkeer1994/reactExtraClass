


import React,{useState} from 'react'
const HocOneTwo=(WrappedComponent)=>{
const HocOneTwo = () => {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count*10)
    }
  return (
    <div> 
        <WrappedComponent count={count} increment={increment}/>
    </div>
  )
}
}
export default HocOneTwo