import React from 'react'
import Container from '@/components/Container.jsx'
import AboutCard from '@/components/AboutCard.jsx'
import DarkSmily from '@/assets/DarkSmily.svg'
import CVEval from '@/components/CVEval.jsx'
import AssessEval from '@/components/AssessEval.jsx'

/*
Possible Contents are:
About Card
CV -> Filter Words, Rating, and PDF File
Assessment -> Score for each assessment, and total
*/

const ViewUser = () => {
  return (
    <Container>
      <div className='pl-5 grid grid-cols-3 gap-5 pr-5 justify-items-center'>
        <AboutCard image={DarkSmily} name='Emmanuel Fabella' job='Cybersecurity' email='emmanuelfabella606@gmail.com' contact='123456789'/>
        <div className='col-span-2'>
          <CVEval/>
        </div>
        <AssessEval/>
      </div>
     
    </Container>
  )
}

export default ViewUser