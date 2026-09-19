import React, { useEffect } from 'react'
import { useState } from 'react'


const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function achange(){
    console.log('A changed')
  }

  function bchange(){
    console.log('B changed')
  }

  useEffect(function(){
    achange()
  },[a])

  useEffect(function(){
    bchange()
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button 
      onClick={()=>{
        setA(a + 1)
      }}>
        Add a
      </button>

      <button 
      onClick={()=>{
        setB(b - 1)
      }}>
        Sub b
      </button>
    </div>
  )
}

export default App