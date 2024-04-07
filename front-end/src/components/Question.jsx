import React, { useState } from 'react';
import Q from '@/assets/Q.png'
import { db, auth } from '../config/firebase'

const Question = ({no, question, answerA, answerB, answerC, answerD}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const backgroundchange = {
    backgroundImage: `url(${Q})`
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (

    <div className='flex flex-col gap-3'>
    <span className='py-2 px-3 bg-indigo-500 w-max rounded-md text-slate-300 font-bold'>{no}</span>
    <div className='flex p-3 max-w-auto justify-center rounded-lg  bg-slate-100 dark:bg-slate-950 border-gray border-2 shadow-md'>
    <div className='px-2 py-1 w-full'>
      <h1 className='max-h-auto text-white bg-indigo-600 text-wrap p-4 mb-2 rounded-lg bg-center bg-cover' style={backgroundchange}>{question}</h1>

      <forms className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2 *:rounded-md" name="">
        
          <button className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:text-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900 items-center'
            onClick={handleOptionChange}
            onChange={selectedOption === answerA}
            > 
              <label className="mr-1 text-left" htmlFor={answerA}>{answerA}</label>
              <input 
              type='radio' 
              id={answerA} 
              value={answerA}
              checked={selectedOption === answerA}
              onChange={handleOptionChange}
              name={question}
              />
            </button>

          <button className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:text-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900 items-center'
            onClick={handleOptionChange}
            onChange={selectedOption === answerB}
            > 
            <label className="mr-1 text-left" htmlFor={answerB}>{answerB}</label>
            <input 
              type='radio' 
              id={answerB}
              value={answerB}
              checked={selectedOption === answerB}
              onChange={handleOptionChange}
              name={question}
              />
          </button>

          <button className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:text-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900 items-center'
            onClick={handleOptionChange}
            onChange={selectedOption === answerC}
            > 
            <label className="mr-1 text-left" htmlFor={answerC}>{answerC}</label>
            <input 
              type='radio' 
              id={answerC}
              value={answerC}
              checked={selectedOption === answerC}
              onChange={handleOptionChange}
              name={question}
              />
          </button>

          <button className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:text-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900 items-center'
            onClick={handleOptionChange}
            onChange={selectedOption === answerD}
            > 
            <label className="mr-1 text-left" htmlFor={answerD}>{answerD}</label>
            <input 
              type='radio' 
              id={answerD}
              value={answerD}
              checked={selectedOption === answerD}
              onChange={handleOptionChange}
              name={question}
              />
          </button>
      </forms>
    </div>
    </div>
    </div>
  )
}

export default Question