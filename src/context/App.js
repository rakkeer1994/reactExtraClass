import React from 'react'
import UseContextHookTest from './UseContextHook'
import UserContext from './UserContext'
const App = () => {
  return (
    <>
    <UserContext>
        <UseContextHookTest/>
    </UserContext>
    </>
  )
}

export default App