import React from 'react';
import Logo from '../assets/Logo.png';
import lightdiscord from '../assets/lightdiscord.svg';
import lightgit from '../assets/lightgit.svg';
import { Link } from 'react-router-dom';

const ApplicantFooter = () => {
  
  return (
    <>
      <footer className="max-h-29 max-w-auto ml-20 bg-white dark:bg-indigo-950 border-t-2 border-gray  sm:mt-7 md:md-0 md:mr-0">
        <div className="flex py-5 mx-6 border-b-2 border-black justify-between items-center flex-wrap">
          <div className='flex flex-wrap justify-center items-center'>

            <img src={Logo} className="h-20 w-auto sm:block md:inline self-center"/>
            <div className="inline-flex flex-col">
              <p className="inline ml-5 mt-3 bg-black text-white dark:bg-slate-200 dark:text-black py-1 px-14 rounded-3xl">ARTISAN PEEPER</p>
              <p class="inline text-sm ml-6 mt-2 tracking-wide">AUTOMATED EMPLOYMENT MODEL</p>
            </div>

          </div> 
          <div className='flex flex-col gap-3 my-5 md:flex-row md:my-0 md:gap-7'>
              <p><Link to="/dashboard">Explore</Link></p>
              <p><Link>Assessment</Link></p>
              <p><Link>Status</Link></p>
              <p><Link to="/login">Log-out</Link></p>
          </div>

          <div>
            <p className="text-spacing mr-5 self-center">This project is an output for the<br/> fullfilment of the Hackathon of<br/> WPH Digital Lte Ptd. </p>
          </div>
        </div>
        
        <div className="flex py-4 px-6 items-baseline justify-between flex-wrap">
          <span>Artisan Peeper</span>
          <div className='flex gap-3'>
            <img src={lightdiscord} className="inline h-7 w-auto p-1 bg-black rounded-full dark:bg-indigo-950"/>
            <img src={lightgit} className="inline h-7 w-auto p-1 bg-black rounded-full dark:bg-indigo-950"/>
          </div>
          <span>artisanpeeper@gmail.com</span>
        </div>
      </footer>
    </>
  )
}

export default ApplicantFooter