import React from 'react'
import { memo } from 'react'
const Child = (props) => {
    console.log("this is cchild Rerender")

     const data=props.fetchData
    console.log("props recieved", data)
  return (
    <div>
     <h1>this is child component</h1>
    </div>
  )
}

export default memo(Child)