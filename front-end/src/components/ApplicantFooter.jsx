import React from 'react';
import Logo from '../assets/Logo.png';
import darkdiscord from '../assets/darkdiscord.svg';
import darkgit from '../assets/darkgit.svg';
import { Link } from 'react-router-dom';

const ApplicantFooter = () => {
  return (
    <>
      <footer className="max-h-29 max-w-auto ml-20 bg-white border-t-2 border-gray  sm:mt-7 md:md-0 md:mr-0">
        <div className="flex py-5 mx-6 border-b-2 border-black justify-between items-center flex-wrap">
          <div className='flex flex-wrap justify-center items-center'>
            <img src={Logo} className="h-20 w-auto sm:block md:inline self-center"/>
            <div className="inline-flex flex-col">
              <p className="inline ml-5 mt-3 bg-black text-white py-1 px-14 rounded-3xl">ARTISAN PEEPER</p>
              <p class="inline text-sm ml-6 mt-2 tracking-wide">AUTOMATED EMPLOYMENT MODEL</p>
            </div>
          </div> 
          <div className='flex flex-col gap-3 my-5 md:flex-row md:my-0 md:gap-7'>
              <p>Explore</p>
              <p>Assessment</p>
              <p>Status</p>
              <p>Log-out</p>
          </div>
          <div>
            <p className="text-spacing mr-5 self-center">This project is an output for the<br/> fullfilment of the Hackathon of<br/> WPH Digital Lte Ptd. </p>
          </div>
        </div>
        
        <div className="flex py-4 px-6 items-baseline justify-between flex-wrap">
          <span>Artisan Peeper</span>
          <div className='flex gap-4'>
            <img src={darkdiscord} className="inline h-7 w-auto"/>
            <img src={darkgit} className="inline h-7 w-auto"/>
          </div>
          <span>artisanpeeper@gmail.com</span>
        </div>
      </footer>
    </>
  )
}

export default ApplicantFooter