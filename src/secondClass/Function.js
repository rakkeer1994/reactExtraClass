
import React from 'react'
import { useState } from 'react'
const Function = () => {
  const [count, setCount] = useState(10)
  return (
    <div>
        <h1>this is function component</h1>
        <h3>Counter No is increases: {count}</h3>
        <button onClick={()=>{setCount(count+5)}}>IncCount</button>
    </div>
  )
}

export default Function