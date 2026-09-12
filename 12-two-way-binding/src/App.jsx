import React from 'react'
import { useState } from 'react'

const App = () => {
  const [FirstName, setFirstName] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Form Submitted by",FirstName)

    setFirstName('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter your name' 
        value={FirstName}
        onChange={(e)=>{
          setFirstName(e.target.value)
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App