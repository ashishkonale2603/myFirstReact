import React, {useState} from 'react'
import './App.css'

const App = () => {
  const [num, setnum] = useState(0)

  function addFive(){
    setnum(num+5)
  }

  function subFive(){
    setnum(num-5)
  }

  function addHundred(){
    setnum(num+100)
  }

  return (
    <div className='mydiv'>
      <h1>{num}</h1>
      <button onClick={addFive}>Add 5</button>
      <button onClick={subFive}>Sub 5</button>
      <button onClick={addHundred}>Add 100</button>
    </div>
  )
}

export default App