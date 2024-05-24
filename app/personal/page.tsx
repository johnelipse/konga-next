 "use client"
 import React, { useState } from 'react'

export default function Personal() {
  const[count,setCount]=useState(0)
  function handleIncrease(){
    setCount(count+1)
  }
  function handleDecrease(){
    setCount(count-1)
  }
    return (
  <section>
      <div className='bg-black text-white py-[0.5rem] px-[0.9rem] flex w-[5rem] justify-between'>
     <button onClick={handleDecrease} className='bg-black text-white '>-</button> 
     <h3 className={`${count>0? "text-green-600":'text-red-700'}`}>{count}</h3> 
     <button onClick={handleIncrease} className='bg-black text-white '>+</button>
    </div>
   </section>
  )
}
