import React, { useState } from 'react';

const Question = ({no, question, answerA, answerB, answerC, answerD, }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className='px-2 py-1 w-[600px]'>
      <h1 className='max-h-auto text-white bg-indigo-600 text-wrap p-4 mb-2 rounded-lg border-2 border-black' style="">QUESTION #{no}: {question}</h1>

      <forms className="grid grid-cols-2 gap-x-3 gap-y-2 *:rounded-md">
          <div className='flex justify-between px-3 py-1 border-[1px] border-black text-wrap hover:scale-105 hover:bg-indigo-600 duration-100'
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}> 
            <label for='a1' >A. {answerA}</label>
            <input 
              type='radio' 
              id='a1' 
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={handleOptionChange}/>
          </div>
          <div className='flex justify-between px-3 py-1 border-[1px] border-black text-wrap hover:scale-105 hover:bg-indigo-600 duration-100'
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}> 
            <label for='b1' >B. {answerB}</label>
            <input 
              type='radio' 
              id='b1'
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={handleOptionChange}
              />
          </div>
          <div className='flex justify-between px-3 py-1 border-[1px] border-black text-wrap hover:scale-105 hover:bg-indigo-600 duration-100'
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}> 
            <label for='c1' >C. {answerC}</label>
            <input 
              type='radio' 
              id='c1'
              value="option3"
              checked={selectedOption === 'option3'}
              onChange={handleOptionChange}
              />
          </div>
          <div className='peer flex justify-between px-3 py-1 border-[1px] border-black text-wrap hover:scale-105 hover:bg-indigo-600 duration-100'
              value="option4"
              checked={selectedOption === 'option4'}
              onChange={handleOptionChange}> 
            <label className='peer-hover:' for='d1' >D. {answerD}</label>
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
  )
}

export default Question