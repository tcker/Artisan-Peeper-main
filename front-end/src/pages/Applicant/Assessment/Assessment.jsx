import React from 'react'
import Question from '@/components/Question.jsx'
import QuestionNav from '@/components/QuestionNav'
import Camera from '@/components/Camera.jsx'


const Assessment = () => {
  return (
    <div className='ml-28 mr-10 pt-5 grid md:grid-cols-3'>
      <div className='self-start'>
        <Question />
        <Question />
        <Question />
      </div>
      <div></div>
      <div className='flex flex-col gap-4'>
        <Camera/>
        <QuestionNav  />
      </div>
    </div>
  )
}

export default Assessment