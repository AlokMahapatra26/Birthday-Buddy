import React from 'react'
import { account } from '../appwrite/appwrite';
import { useState , useEffect } from 'react';
function Home() {

  //state
  const [userData , setUserData] = useState();

  //backend code
  //getting account data as soon as page load
  useEffect(()=>{
    const getData = account.get();
    getData.then(
      function(response){
        setUserData(response);
      },
      function(error){
        console.log(error)
        alert("Something went wrong")
      }
    )
  }, [])




  return (
    <>
    <section className='px-4'>
      <h2 className='text-center mt-8 mb-8 text-xl'>Hello {userData ? userData.name : "loading..."}</h2>
      <hr className='w-1/4 mx-auto'/>
     <section className='mt-8'>
      <div className='border inline-block p-4 m-4 rounded shadow hover:shadow-md cursor-pointer transition'>
        <p className='text-xl'>Alok Mahapatra</p>
        <p className='text-sm'>26/07/2004</p>
      </div>
    
      
      
     </section>
    </section>
    </>
  )
}

export default Home