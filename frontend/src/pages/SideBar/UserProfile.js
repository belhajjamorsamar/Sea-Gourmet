import React from 'react'


const UserProfile = ({toggle}) => {
  return (
    <div className={` flex gap-5 items-center  ${toggle ? "bg-none transition-all duration-300  delay-200" : "bg-white rounded-xl p-2 "}`}>
      <div className='min-w-[3.5rem] h-[3.5rem]'>
      <img src="/images/User.jpg" alt="Userimage"  className='w-full h-full rounded-full object-cover'/></div>
     <div className={toggle ? "opacity-0 delay-200" : ""}>
     <h3 className='text-xl'>Samar belhajj amor</h3>
     <span className='text-[0.75rem] opacity-60'>belhajjamorsamar@gmail.com</span>
     </div> 
    </div>
  )
}

export default UserProfile
