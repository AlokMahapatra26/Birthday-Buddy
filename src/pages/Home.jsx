import React from 'react'
import { account } from '../appwrite/appwrite';
import { useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { databases } from '../appwrite/appwrite';
import Header from '../components/Header';

function Home() {

  //state
  const [name , setName] = useState();
  const [userData , setUserData] = useState();

  //navigator
  const navigate = useNavigate();

  //backend code
  // getting username from database for greeting
  useEffect(()=>{
    const getData = account.get();
    getData.then(
      function(response){
        setName(response);
      },
      function(error){
        console.log(error)
        alert("Something went wrong")
      }
    )
  }, [])

  //getting names and birthdates
  useEffect(()=>{
    let promise = databases.listDocuments(
      "64d3b9cf76d2074c8e08",
      "64d3b9f0b96832857134",
  );
  
  promise.then(function (response) {
      console.log(response);
      setUserData(response.documents)
  }, function (error) {
      console.log(error);
  });
  },[])

// console.log(name?.name.email === userData.uniqueEmail)
// console.log(name.email)
// console.log("hello" , userData ? userData.uniqueEmail : "")



  return (
    <>
    <section className=''>
    <Header/>
      <h2 className='text-center mt-8 mb-8 text-xl'>Hello {name ? name.name : "loading..."}</h2>
      <hr className='w-1/4 mx-auto'/>
     <section className='mt-8 flex flex-row justify-center flex-wrap'>

     {userData ? userData.map(
      (item) => {
        

        if(name?.email == item.uniqueEmail){
        const dateObject = new Date(item.date);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Month is zero-based, so adding 1
        const day = dateObject.getDate();
        const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

        return (
           
          <div className=' p-4 m-4  cursor-pointer transition  rounded shadow' key={item.id} id='birthday_card'>
            <p>{item.name}</p>
            <p>{formattedDate}</p>
          </div>
        );
        }
      }
    ) : "loading"}
    
     </section>
     <div className="fixed bottom-4 right-4">
  <button onClick={()=>navigate('/add-birthdate')} className="bg-red-500 hover:bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
    </svg>
  </button>
    </div>

    </section>
    </>
  )
}

export default Home