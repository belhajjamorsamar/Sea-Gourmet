import React from 'react'
import {datas} from './datats'

const SidebarData = ({ toggle }) => {
  return (
    <div className=''>
    {datas.map(data =>{
       return(
        <div className={`${ toggle ?  "last:w-[3.6rem]" : "last:w-[17rem]"} sidebar  last:absolute left-4 bottom-4`} key={datas.id}>
          <div className='mr-8 text-[1.7rem] text-brouwn'>{data.icon}</div>
          <div className={`${toggle ? "opacity-0" : ""} text-[1rem text-brouwn whitespace-pre`}>{data.text}</div>
        </div>
       )
    })}
      
    </div>
  )
}

export default SidebarData
