import React from 'react'
import { account } from '../appwrite/appwrite';
import { useState , useEffect } from 'react';
import { databases } from '../appwrite/appwrite';
import { Query } from 'appwrite';
function Home() {

  //state
  const [userData , setUserData] = useState();

  ////backend code
  //getting username from database for greeting
  // useEffect(()=>{
  //   const getData = account.get();
  //   getData.then(
  //     function(response){
  //       setUserData(response);
  //     },
  //     function(error){
  //       console.log(error)
  //       alert("Something went wrong")
  //     }
  //   )
  // }, [])

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




  return (
    <>
    <section className='px-4'>
      {/* <h2 className='text-center mt-8 mb-8 text-xl'>Hello {userData ? userData.name : "loading..."}</h2> */}
      <hr className='w-1/4 mx-auto'/>
     <section className='mt-8'>

     {userData ? userData.map(
      (item) => {
        const dateObject = new Date(item.date);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1; // Month is zero-based, so adding 1
        const day = dateObject.getDate();
        const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

        return (
          <div className='border inline-block p-4 m-4 rounded shadow hover:shadow-md cursor-pointer transition' key={item.id}>
            <p>{item.name}</p>
            <p>{formattedDate}</p>
          </div>
        );
      }
    ) : "loading"}
      
     </section>
    </section>
    </>
  )
}

export default Home