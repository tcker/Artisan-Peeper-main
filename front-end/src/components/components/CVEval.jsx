import React from 'react'


/*
Possible Contents are:
About Card
CV -> Filter Words, Rating, and PDF File
Assessment -> Score for each assessment, and total
*/

const CVEval = ({rating}) => {
  return (
    <div className='flex flex-col h-24 w-full lg:w-[900px] p-5 dark:bg-slate-900 shadow-md rounded-xl border-[1px] mr-5 border-gray mb-5 justify-center items-center'>
      <h1 className='text-xl font-bold'>CV Rating</h1>
      <p>{rating}</p>
    </div>
  )
}

export default CVEval