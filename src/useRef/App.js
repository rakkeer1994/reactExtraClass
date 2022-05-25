//useRef
//It cab be used to access a DOM element directly
//the useRef hook can also be used to keep track of previous state value
//we can add a ref attribute to an element to access it directly in the dom
//useRef() only returns one item/object called current


// In this case we have created a state variable and assigned its value to a input field , 
// now we want that input value should be updated every time but it should not cause rendering every time.
//  So when we update the state in component it causes render of component.
// to avoid this we can use useRef hook
// it returns a value which is not mutable 
// a component using useRef hook also known as uncontrolled component because in this case the changes happening
//  on the dom is not controlled by the state variable


import React,{useEffect, useRef,useState} from 'react'

const App = () => {
    const [valuu,setValuu]=useState("Rakesh")
    const prevValuu=useRef("")
    const inputEle=useRef()
    const focusInput=()=>{
        inputEle.current.focus()
        inputEle.style.color="blue"
    }

    useEffect(()=>{
         prevValuu.current=valuu
    },[])
  return (
    <div>
        <input type='text' ref={inputEle}/> <br></br> <br></br>
        <button onClick={focusInput}>FocusInput</button> <br></br> <br></br>

        <button onClick={()=>{setValuu("rohit")}}>changeValu</button>
        <h1>NewValue:{valuu}</h1>
        <h1>PrevValue:{prevValuu.current}</h1>
    </div>
  )
}

export default App



// import React, { useState, useRef }  from "react";


// function App (){
//     console.log("Rendered");
//     const [a, setA] = useState();
//     const aRef = useRef()
//     return(
//         <div>
//             <h1>This is the explanation of useRef Hook</h1>
//             <h2>{a}</h2>
//             <input type="text" value={a} onChange={(e)=>setA(e.target.value)}/>


//             Soultion by using useRef hook
//             <input type="text" ref={aRef} />
//             <button onClick={()=>setA(aRef.current.value)}>SetValue</button>
//         </div>
//     )
// }

// export default App