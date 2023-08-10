import React from 'react'
import { useState , useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'
import { databases } from '../appwrite/appwrite';
import { account } from '../appwrite/appwrite';


function AddBirthday() {

   
  
   

  //state
  const [fromData , setFormData] = useState({
    name : "",
    date : "",
  });

  const [uniqueEmail , setUniqueEmail] = useState("");

    //getting current user email
    useEffect(()=>{
      const getData = account.get();
      getData.then(
        function(response){
          setUniqueEmail(response.email);
        },
        function(error){
          console.log(error)
          alert("Something went wrong")
        }
      )
    }, [])

  const {name , date} = fromData;
 
 

  
  //onChnage function
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }));
  }





  //backend code 
  //adding data to database
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const promise = databases.createDocument("64d3b9cf76d2074c8e08", "64d3b9f0b96832857134" , uuidv4() , {
      name,
      date,
      uniqueEmail
    })

    promise.then(
      function(response){
        console.log(response);
        alert("Added");
      },
      function(error){
        console.log(error);
      }
    )
    }
  

  return (
    <section className=''>
    <div className='mt-40'>
    <h1 className='text-3xl text-center font-bold p-6'>Add Birthdate</h1>
    <div className='flex flex-col lg:w-1/4 md:w-2/4 w-3/4 mx-auto item-center justify-center mt-4'>
    
      <form onSubmit={handleSubmit}> 
        <div className='flex flex-col'>
        <input type="text"
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