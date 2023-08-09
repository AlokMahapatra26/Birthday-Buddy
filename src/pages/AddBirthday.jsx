import React from 'react'
import { useState } from 'react';


function AddBirthday() {


  const [fromData , setFormData] = useState({
    name : "",
    date : "",
  });

  const {name , date} = fromData;
  

  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }));
  }


  return (
    <section className=''>
    <div className='mt-40'>
    <h1 className='text-3xl text-center font-bold p-6'>Add Birthdate</h1>
    <div className='flex flex-col lg:w-1/4 md:w-2/4 w-3/4 mx-auto item-center justify-center mt-4'>
    
      <form>
        <div className='flex flex-col'>
        <input type="email"
         placeholder='Enter Name'
         id="name" 
         value={name} 
         onChange={onChange}
         className='border my-2 p-2  outline-none rounded-lg ' 
         
         />
        <input type="date" 
         id="date" 
         value={date} 
         onChange={onChange}
         className='border mt-6 p-2  outline-none rounded-lg '
         />
        </div>
       
        <button type='submit' className='w-full mx-auto bg-rose-500 mt-8 p-2 shadow-md  text-white rounded-lg hover:bg-rose-600 transition duration-150 ease-in-out hover:shadow-lg'> Add </button>
        
        
       
      </form>
    
    </div>
    </div>
  </section>
  )
}

export default AddBirthday