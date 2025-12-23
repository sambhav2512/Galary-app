import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './components/Card';
import axios from 'axios'

const App = () => {

  const [userdata, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

   const getData = async ()=>{
    try {
     const response= await axios.get(`https://picsum.photos/v2/list?page=${index+1}&limit=10`)     
     setUserData(response.data) 
    } 
   catch (error) {
      alert(error.message);
   }  
  }
  useEffect(function(){
     getData()
  },[index])

  let printData = <h3>Loading....</h3>
  if (userdata.length>0) {
    printData = userdata.map(function(elem , idx){
        return <div key={idx}>
        <Card elem={elem}/>
      </div>
      })  
  }
  return (
    <div className='bg-orange-200 h-full lg:h-screen w-full'>
    <div className='flex justify-center'>
      <h1 className='text-black font-bold text-4xl'>My Galary</h1>
    </div>
    <div className='flex flex-wrap h-[82%] justify-center gap-5 p-10'>
      {printData}
    </div>

    <div className='flex justify-center items-center gap-6'>
      <button 
      className='bg-amber-300 rounded text-black font-semibold px-4 py-2 cursor-pointer' 
      onClick={()=>{
        if(index>1){
        setIndex(index-1)
        setUserData([])
        }
      }}
      >Prev
      </button>
      <h4>Page{index}</h4>
      <button 
      className='bg-amber-300 rounded text-black font-semibold px-4 py-2 cursor-pointer'
      onClick={()=>{
        setIndex(index+1)
        setUserData([])
      }}
      >Next
      </button>
    </div>
    </div>

  )
}

export default App
