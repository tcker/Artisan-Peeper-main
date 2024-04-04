import React from 'react'


/*
Possible Contents are:
About Card
CV -> Filter Words, Rating, and PDF File
Assessment -> Score for each assessment, and total
*/

const CVEval = () => {
  return (
    <div className='grid grid-cols-2 h-[700px] w-[1000px] p-5 dark:bg-slate-900 shadow-md rounded-xl border-[1px] mr-5 border-gray dark:border-white'>
      <div className='border-r-[1px] border-black dark:border-white'>
        <span className='text-xl font-bold py-1 px-5 bg-indigo-900 text-slate-200 rounded-2xl'>Filter:</span>
        <h1 className='mt-5 pl-5 text-lg font-bold pb-3 border-b-[1px] border-black dark:border-white'>Previous  Experiences</h1>
      </div>
      <div className='w-full pl-5'>
        PDF file itself 
      </div>
    </div>
  )
}

export default CVEval