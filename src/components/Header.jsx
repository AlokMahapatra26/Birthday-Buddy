import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (
    <div className='bg-red-500 w-screen flex justify-between p-4 shadow-sm'>
      <div className='cursor-pointer' onClick={()=>navigate('/home')}>
        <h1 className='text-xl text-white xl:ml-10 '>Birthday Buddy</h1>
      </div>
      <div className='cursor-pointer' onClick={()=>navigate("/profile")}>
      <FontAwesomeIcon icon={faUser} size="xl" className='text-white xl:mr-10'/>
      </div>
    </div>
  )
}

export default Header