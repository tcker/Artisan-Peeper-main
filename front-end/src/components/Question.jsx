import React, { useState } from 'react';
import Q from '@/assets/Q.png'

const Question = ({no, question, answerA, answerB, answerC, answerD, }) => {
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
    <span className='py-2 px-3 bg-indigo-300 w-max rounded-md text-slate-700'>QUESTION #{no}: </span>
    <div className='flex p-3 max-w-auto justify-center bg-slate-100 rounded-lg dark:bg-slate-800'>
    <div className='px-2 py-1 w-full'>
      <h1 className='max-h-auto text-white bg-indigo-600 text-wrap p-4 mb-2 rounded-lg bg-center bg-cover' style={backgroundchange}>` {question}</h1>

      <forms className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2 *:rounded-md">
          <div className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900'
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}> 
            <label className="mr-1" for='a1' >A. {answerA}</label>
            <input 
              type='radio' 
              id='a1' 
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}/>
          </div>
          <div className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900'
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}> 
            <label className="mr-1" for='b1' >B. {answerB}</label>
            <input 
              type='radio' 
              id='b1'
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
              />
          </div>
          <div className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900'
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}> 
            <label className="mr-1" for='c1' >C. {answerC}</label>
            <input 
              type='radio' 
              id='c1'
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
              />
          </div>
          <div className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900'
              value="option4"
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}> 
            <label className="mr-1" for='d1' >D. {answerD}</label>
            <input 
              type='radio' 
              id='d1'
              value="option4"
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}
              />
          </div>
      </forms>
    </div>
    </div>
    </div>
  )
}

export default Question