import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {


  const navigate = useNavigate();

  return (
    <section>
    <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>

    <div className='flex flex-col items-center mt-6'>
    <p>Name</p>
    <p>Email</p>  
    </div>

    <div >
      <p className=' shadow  rounded text-center mt-8  w-20 mx-auto p-1 text-red-500 cursor-pointer select-none hover:shadow-md transition hover:text-white hover:bg-red-400'>Sign Out</p>
    </div>
  </section>
  )
}

export default Profile