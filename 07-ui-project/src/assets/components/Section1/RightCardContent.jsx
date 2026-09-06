import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full flex p-8 flex-col justify-between'>
    <h2  className='bg-white rounded-full h-12 text-xl font-semibold w-12 flex justify-center items-center'>{props.id+1}</h2>
    <div>
      <p className='text-lg leading-relaxed text-white mb-14'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem modi asperiores quidem quasi fuga veritatis?</p>
      <div className='flex justify-between'>
        <button style={{backgroundColor:props.color}} className='text-white py-2 rounded-full font-semibold px-8'>{props.tag}</button>
        <button style={{backgroundColor:props.color}} className='text-white py-2 rounded-full font-semibold px-4'><i class="ri-arrow-right-line"></i></button>
      </div>
    </div>
    </div>
  )
}

export default RightCardContent