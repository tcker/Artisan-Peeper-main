import React from 'react';
import Logo from '../assets/Logo.png';
import darkdiscord from '../assets/darkdiscord.svg';
import darkgit from '../assets/darkgit.svg';
import { Link } from 'react-router-dom';

const EmployerFooter = () => {
  return (
    <>
      <footer className="max-h-29 w-full bg-white ">
        <div className="flex py-5 mx-6 border-b-2 border-black justify-between items-center flex-wrap">
          <div>
            <img src={Logo} className="inline h-20 w-auto"/>
            <div className="inline-flex flex-col">
              <p className="inline ml-5 bg-black text-white py-1 px-12 rounded-3xl">ARTISAN PEEPER</p>
              <p class="inline text-sm ml-6 mt-2 tracking-wide">AUTOMATED EMPLOYMENT MODEL</p>
            </div>
          </div> 
          <div className='flex gap-7'>
              <p>Profile</p>
              <p>Explore</p>
              <p>Status</p>
              <p>Log-out</p>
          </div>
          <div>
            <p className="text-spacing mr-5">This project is an output for the<br/> fullfilment of the Hackathon of<br/> WPH Digital Lte Ptd. </p>
          </div>
        </div>
        
        <div className="flex py-4 px-6 items-baseline justify-between">
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

export default EmployerFooter