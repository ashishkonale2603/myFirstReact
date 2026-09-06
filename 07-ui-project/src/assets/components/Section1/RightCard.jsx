import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='shrink-0 h-full w-80 relative rounded-4xl overflow-hidden'>
        <img className='h-full w-full object-cover' src={props.img} alt="Card-1 Image" />
        <RightCardContent id={props.id} color={props.color} tag={props.tag} />
    </div>
  )
}

export default RightCard