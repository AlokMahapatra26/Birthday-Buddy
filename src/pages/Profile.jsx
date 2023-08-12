import React from 'react'
import { account } from '../appwrite/appwrite';
import { useNavigate } from 'react-router-dom'
import { useState , useEffect } from 'react';
import Header from '../components/Header';

function Profile() {


  //use Navigate
  const navigate = useNavigate();


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

  //logout functionality
  const handleLogOut  = async() => {
    try{
      await account.deleteSession("current");
      navigate("/")
    }catch (error){
      alert("Something went wrong")
      console.log(error);
    }
  }



  return (
    <>
    <Header/>
    <section className='flex align-center justify-center flex-col mt-20'>
      
    <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>

    <div className='flex flex-col items-center mt-6'>
    <p className='bg-gray-200 px-4 py-2 rounded m-2 '>{userData ? userData.name : "loading..."}</p>
    <p className='bg-gray-200 px-4 py-2 rounded m-2'>{userData ? userData.email : "loading.."}</p>  
    </div>

    <div onClick={handleLogOut}>
      <p className=' shadow  rounded text-center mt-8  w-20 mx-auto p-1 text-red-500 cursor-pointer select-none hover:shadow-md transition hover:text-white hover:bg-red-400 '>Sign Out</p>
    </div>
  </section>
  </>
  )
}

export default Profile