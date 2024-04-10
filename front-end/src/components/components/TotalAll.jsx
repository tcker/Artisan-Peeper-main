import React from 'react'

const TotalAll = ({rating}) => {
  return (
    <div className='flex flex-col h-24 w-full lg:w-[900px] p-5 dark:bg-slate-900 shadow-md rounded-xl border-[1px] mr-5 border-gray mb-5 justify-center items-center'>
      <h1 className='text-xl font-bold'>Assessed in Total:</h1>
      <p className='text-2xl'>{rating}</p>
    </div>
  )
}

export default TotalAll