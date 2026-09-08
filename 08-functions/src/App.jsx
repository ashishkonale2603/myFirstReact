import React from 'react'

const App = () => {
  function myClick(){
    console.log('click')
  }

  return (
    <div>
      <h1>Hey Guys</h1>

      <button onClick={myClick}>Click Me!</button>

    </div>
  )
}

export default App