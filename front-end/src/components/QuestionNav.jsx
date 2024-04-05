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

  const badgeStyling = 'w-12 h-12 flex justify-center items-center border-[1px] border-gray bg-slate-200 hover:bg-slate-300 dark:bg-slate-950 rounded-full';

  return (
    <div className='p-5 rounded-xl flex justify-center items-center flex-col bg-slate-100 dark:bg-slate-950 border-gray border-2'>
      <h1 className='text-3xl pb-1 border-b-[1px]'>{formatTime(time)} s</h1>
      <div className='grid grid-cols-5 gap-4 mt-3 mx-1 *:text-center'>
        <span className={badgeStyling}>1</span>
        <span className={badgeStyling}>2</span>
        <span className={badgeStyling}>3</span>
        <span className={badgeStyling}>4</span>
        <span className={badgeStyling}>5</span>
        <span className={badgeStyling}>6</span>
        <span className={badgeStyling}>7</span>
        <span className={badgeStyling}>8</span>
        <span className={badgeStyling}>9</span>
        <span className={badgeStyling}>10</span>
      </div>
      <div className='my-4 grid items-end'>
        <Button><Link to="/assessment-areas">Submit</Link></Button>
      </div>
    </div>
  );
};

export default QuestionNav