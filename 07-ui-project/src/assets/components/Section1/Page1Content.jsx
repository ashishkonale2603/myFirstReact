import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pt-6 pb-10 flex items-center gap-10  px-18 h-[85%]'>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content