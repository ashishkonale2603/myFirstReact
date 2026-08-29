import React from 'react'

const Card = (myProp) => {
  return (
    
      <div className="card">
        <img src="https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bappa Image" />
        <h1>{myProp.user}</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
    
  )
}

export default Card