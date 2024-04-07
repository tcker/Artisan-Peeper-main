import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const QuestionNav = ({no}) => {

  const [time, setTime] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const badgeStyling = 'w-12 h-12 flex justify-center items-center border-[1px] border-gray bg-slate-200 hover:bg-slate-300 dark:bg-slate-950 rounded-full';

  return (
    <div className='p-5 rounded-xl flex justify-center items-center flex-col bg-slate-100 dark:bg-slate-950 border-gray border-2'>
      <h1 className='text-3xl pb-1 border-b-[1px]'>{formatTime(time)} s</h1>
      {time === 0 ? (<Link to="/assessment-areas"></Link>) : ('')}
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