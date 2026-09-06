import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='overflow-x-auto rounded-4xl flex flex-nowrap gap-10 h-full p-8 w-2/3'>
      {props.users.map(function(elem,idx){

        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  )
}

export default RightContent