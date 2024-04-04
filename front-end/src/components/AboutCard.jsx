import React from 'react'



const AboutCard = ({image, name, job, email, contact, type}) => {
  return (
    <div className='block h-64 w-96 p-5 dark:bg-slate-900 shadow-md rounded-xl border-[1px]'
    >
    <div className='flex justify-center items-center pb-4 border-b-[1px] border-black dark:border-white'>
      <img className='h-28 rounded-full mr-4 border-2 bg-black dark:bg-indigo-500' src={image} alt='Profile'/>
      <div>
        <p className='text-wrap font-extrabold text-2xl'>{name}</p>
        <p className='tracking-wide'>Applying for "{job}"</p>
        <p className='tracking-wide font-extralight'>{type}</p>
      </div>
    </div>
    <h1 className='text-xl font-bold pt-3'>Contact:</h1>
    <ul>
      <li><b>Email:</b> {email}</li>
      <li><b>Contact:</b> {contact}</li>
    </ul>
    </div>
  )
}

export default AboutCard