import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-18 py-8'>
        <h4 className='bg-black text-white uppercase py-2 px-6 rounded-full'>
          Target Audiance
        </h4>
        <button className='bg-gray-200 text-sm px-6 py-2 uppercase rounded-full tracking-widest'>
          Digital Banking Platform
        </button>
    </div>
  )
}

export default Navbar