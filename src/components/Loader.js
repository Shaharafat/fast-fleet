/*
 *
 * Title: Loader  
 * Description: Loader component
 * Author: Shah Arafat
 * Date: 20-03-2021
 *
 */
import React from 'react'

const Loader = () => {
  return (
    <div className="min-h-screen animate-pulse flex flex-col items-center">
      <div className="w-full h-20 bg-gray-300"></div>      

      <div className="h-6 rounded-lg mt-20 w-4/5  sm:w-9/12 bg-gray-300"></div>      

      <div className="mt-20 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-center">
        <div className="w-40 h-40 rounded-lg bg-gray-300"></div>
        <div className="w-40 h-40 rounded-lg bg-gray-300"></div>
        <div className="w-40 h-40 rounded-lg bg-gray-300"></div>
        <div className="w-40 h-40 rounded-lg bg-gray-300"></div>
      </div>
      
      <div className="h-6 rounded-lg mt-20  w-6/12 bg-gray-300"></div>      
    </div>
  )
}

export default Loader