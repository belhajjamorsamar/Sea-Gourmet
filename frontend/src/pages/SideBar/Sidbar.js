import React, { useState } from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import UserProfile from './UserProfile';
import SidebarData from './SidebarData';

const Sidbar = () => {
	const [toggle, setToggle] = useState(false);

	const backgroundImageUrl = 'url(" /images/w12.jpg")';

	return (
		<div
			className="w-full h-screen object-cover flex items-center"
			style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover' }}>
			<div className={`${toggle ? "w-[5.8rem]" : ""} sidebar-container`}>
      <UserProfile toggle={toggle} />
      <SidebarData toggle={toggle} />
				<div className='absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-glass rounded-full cursor-pointer' onClick={()=>{
          setToggle(!toggle)
        }}>
        <BiChevronLeft className={` ${toggle ? "rotate-180" : ""} text-3xl transition-all duration-300`}/>
        </div>
			</div>
		</div>
	);
};

export default Sidbar;
