import { Separator } from './ui/separator'
import React from 'react'


const Total = ({title, total, added}) => {
  return (
    <div className='h-auto w-full md:w-[18.5rem] p-5 border-2 rounded-xl shadow-md'>
      <div className='space-y-2'>
        <h4 className='text-md font-medium leading-none'>{title}</h4>
      </div>
        <Separator className='my-2'/>
      <div className='flex items-center justify-center'>
        <p className='text-2xl font-extrabold pr-3 border-r-2'>{total}</p>
        <p className='text-xl font-semibold pl-3'>{added} new</p>
      </div>
    </div>
  )
}

export default Total