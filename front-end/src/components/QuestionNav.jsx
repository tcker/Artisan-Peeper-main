import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const QuestionNav = () => {
  const [time, setTime] = useState(30 * 60);

  // Function to format time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Function to update timer
  const updateTimer = () => {
    const intervalId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId); 
  };

  useEffect(() => { 
    const intervalId = updateTimer(); 
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className='h-72 sm:w-full lg:w-72 2xl:h-96 2xl:w-96 p-5  bg-slate-100 dark:bg-indigo-950 rounded-2xl'>
      <h1 className='text-3xl pb-1 border-b-[1px] border-black'>{formatTime(time)} s</h1>
      <div className='grid grid-cols-6 gap-4 mt-3 mx-1 *:text-center'>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>1</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>2</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>3</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>4</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>5</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>6</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>7</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>8</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>9</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>10</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>1</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>2</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>3</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>4</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>5</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>6</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>7</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>8</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>9</span>
        <span className='p-1 border-[1px] border-gray bg-slate-200 hover:bg-slate-500 dark:bg-slate-950 rounded-full'>10</span>

      </div>
      <div className='flex h-[5%] items-end justify-end 2xl:h-[30%]'>
        <Button><Link to="/assessment-areas">Submit</Link></Button>
      </div>
    </div>
  );
};

export default QuestionNav