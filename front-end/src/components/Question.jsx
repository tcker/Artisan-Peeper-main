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
    <span className='py-2 px-3 bg-indigo-500 w-max rounded-md text-slate-300 font-bold'>QUESTION #{no}: </span>
    <div className='flex p-3 max-w-auto justify-center rounded-lg  bg-slate-100 dark:bg-slate-950 border-gray border-2'>
    <div className='px-2 py-1 w-full'>
      <h1 className='max-h-auto text-white bg-indigo-600 text-wrap p-4 mb-2 rounded-lg bg-center bg-cover' style={backgroundchange}>` {question}</h1>

      <forms className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-2 *:rounded-md">

          <button className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900 items-center'
            value="option1"
            onClick={handleOptionChange}
            onChange={selectedOption === 'option1'}
            name="AnswerA"
            > 
            <label className="mr-1" htmlFor='a1' name="AnswerA">A. {answerA}</label>
            <input 
              type='radio' 
              id='a1' 
              value="option1"
              checked={selectedOption === 'option1'}
              name="AnswerA"
              onChange={handleOptionChange}/>
          </button>

          <button className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900 items-center'
            value="option2"
            onClick={handleOptionChange}
            onChange={selectedOption === 'option2'}
            name="AnswerB"
            > 
            <label className="mr-1" htmlFor='b1' name="AnswerB">B. {answerB}</label>
            <input 
              type='radio' 
              id='b1'
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
              name="AnswerB"
              />
          </button>

          <button className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900 items-center'
            value="option3"
            onClick={handleOptionChange}
            onChange={selectedOption === 'option3'}
            name="AnswerC"
            > 
            <label className="mr-1" htmlFor='c1' name="AnswerC">C. {answerC}</label>
            <input 
              type='radio' 
              id='c1'
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
              name="AnswerC"
              />
          </button>

          <button className='flex justify-between px-3 py-1 border-[1px] border-slate-500 text-wrap bg-white hover:scale-105 hover:bg-indigo-500 duration-100 dark:bg-indigo-900 items-center'
            value="option4"
            onClick={handleOptionChange}
            onChange={selectedOption === 'option4'}
            name="AnswerD"
            > 
            <label className="mr-1" htmlFor='d1' name="AnswerD">D. {answerD}</label>
            <input 
              type='radio' 
              id='d1'
              value="option4"
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}
              name="AnswerD"
              />
          </button>
      </forms>
    </div>
    </div>
    </div>
  )
}

export default Question