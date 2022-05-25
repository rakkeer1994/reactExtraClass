import React,{useReducer,useState} from 'react'


const intialState=[{id:Date.now(),name:"rakesh",email:"keer@gmail.com"}]
const reducer=(state,action)=>{
   switch (action.type){
       case "ADD":
           return [...state,action.payload]
        case "DELETE":
            return state.filter(contact=>{
                return contact.id !==action.payload.id
            })   

   }
}

const useReducerTest=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [state,dispatch]=useReducer(reducer,intialState)
    const addContact=(e)=>{
        e.preventDefault()
        const contact={
            id: Date.now(),name,email
        }
        dispatch({type:"ADD", payload: contact})
    }
    return(
        <>
        <h1>useReducerHook explaination</h1>
        <form onSubmit={addContact}>
            <input type='text' placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/> <br></br> <br></br>
            <input type='text' placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br></br> <br></br>
            <button type='submit'>SubmitContact</button>
        </form>
        
        {/* <button onClick={()=>dispatch({type:"INC"})}>countIncRed</button> <br></br> <br></br> */}
        {/* <button onClick={()=>dispatch({type:"DEC"})}>countIncRed</button> */}
        <div>
            {
                state.map((contact)=>{
                    return (
                        <>
                        <h1>{contact.name}</h1>
                        <button onClick={()=>dispatch({type:"DELETE",payload:{id:contact.id}})}>Delete</button>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}

export default useReducerTest


//this is the simple example of useReducer
// const intialState=50;
// const reducer=(state,action)=>{
//    switch (action.type){
//        case "INC":
//            return state+10
//         case "DEC":
//             return state-10   

//    }
// }

// const useReducerTest=()=>{
//     const [count,setCount]=useState(10)
//     const [state,dispatch]=useReducer(reducer,intialState)
//     return(
//         <>
//         <h1>useReducerHook explaination</h1>
//         <button onClick={()=>{setCount(count+10)}}>CountInc:{count}</button>  <br></br> <br></br>
//         <h1>State:{state}</h1>
//         <button onClick={()=>dispatch({type:"INC"})}>countIncRed</button> <br></br> <br></br>
//         <button onClick={()=>dispatch({type:"DEC"})}>countIncRed</button>
//         </>
//     )
// }

// export default useReducerTest