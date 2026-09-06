import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const SectionOne = (props) => {
  return (
    <div className='h-screen w-full bg-gray-400'>
        <Navbar />
        <Page1Content users={props.users} />
    </div>
  )
}

export default SectionOne