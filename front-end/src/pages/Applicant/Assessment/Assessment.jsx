import React from 'react'
import QuestionNav from '@/components/QuestionNav'
import Camera from '@/components/Camera.jsx'
import Question from '@/components/Question.jsx'
import { Button } from '@/components/ui/button'

const Assessment = () => {
  return (
    <div className='ml-20 grid gap-x-5 sm:ml-20 md:ml-28 md:mr-10 lg:mr-0 lg:grid-cols-[0.7fr_1fr] xl:grid-cols-[0.6fr_1fr] 2xl:grid-cols-[0.6fr_1fr] 2xl:ml-13'>
      <div></div>
      <div className='sm:static lg:fixed lg:ml-5 xl:ml-20 mt-10 flex flex-col gap-4'>
        <Camera/>
        <QuestionNav  />
      </div>
      <div className='flex flex-col gap-10 bg-indigo-600 px-10 pt-5'>
      <span className='pb-2 text-2xl text-wrap border-b-[1px] text-white border-white w-full'>
        Teamwork</span>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Button className="mb-10">Submit</Button>
      </div>
    </div>
  )
}

export default Assessment