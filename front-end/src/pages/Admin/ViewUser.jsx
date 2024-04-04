import React from 'react'
import Container from '@/components/Container.jsx'
import AboutCard from '@/components/AboutCard.jsx'
import DarkSmily from '@/assets/DarkSmily.svg'
import CVEval from '@/components/CVEval.jsx'
import AssessEval from '@/components/AssessEval.jsx'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

/*
Possible Contents are:
About Card
CV -> Filter Words, Rating, and PDF File
Assessment -> Score for each assessment, and total
*/

const ViewUser = () => {
  return (
    <Container>
      <div className='pl-4 grid grid-cols-3 gap-5 justify-items-center'>
        <div>
          <h2 className='text-slate-500 underline pb-5'><Link to="/dashboard"><FaArrowLeft className='inline mr-1'/>Go back to Dashboard</Link></h2>
          <AboutCard image={DarkSmily} name='Emmanuel Fabella' job='Cybersecurity' email='emmanuelfabella606@gmail.com' contact='123456789' type="Full-time"/>
        </div>
        <div className='col-span-2'>
          <CVEval/>
        </div>
        <AssessEval/>
      </div>
     
    </Container>
  )
}

export default ViewUser