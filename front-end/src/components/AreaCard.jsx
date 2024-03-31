import React from 'react';
import { Link } from 'react-router-dom';
import {
  CameraAlert,
  CameraAlertAction,
  CameraAlertCancel,
  CameraAlertContent,
  CameraAlertDescription,
  CameraAlertFooter,
  CameraAlertHeader,
  CameraAlertTitle,
  CameraAlertTrigger,
} from "@/components/CameraAlert.jsx"


const Question = ({ title, score, upto }) => {
  // const [Passed, setPassed] = useState(false);
  // if (!Passed) {
    
  // }

  return (
    <div className={'flex flex-col justify-center h-64 w-72 p-7 bg-white border-2 border-slate-400 rounded-xl hover:scale-105 focus:scale-110 ease-in-out dark:bg-slate-950 dark:border-slate-600 hover:border-indigo-800 hover:border-4'}>
        <div className='flex justify-end'>{score}/{upto}
        </div>
        <span className='col-start-1 col-end-4 mb-2 pb-2 text-3xl hover:text-slate-700 font-bold border-b-2 border-black dark:border-white text-wrap dark:text-white dark:hover:text-slate-200'>{title}</span>
        <div className='flex mt-2 mb-3 gap-2'>
          <div className='py-1 px-2 bg-slate-200 dark:bg-slate-800 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700'>10+ Questions</div>
          <div className='py-1 px-2 bg-slate-200 dark:bg-slate-800 rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700'>30 min</div>
        </div>
        <CameraAlert>
          <CameraAlertTrigger><div className='p-2 text-center bg-indigo-500 hover:bg-indigo-400 rounded-lg text-white'>Start Assessment</div></CameraAlertTrigger>
            <CameraAlertContent>
              <CameraAlertHeader>
                <CameraAlertTitle>Disclaimer: Camera Usage</CameraAlertTitle>
                  <CameraAlertDescription>
                  The whole process requires an open camera for trasparency. Please open your camera to continue to the assessment. 
                  </CameraAlertDescription>
              </CameraAlertHeader>
                <CameraAlertFooter>
                  <CameraAlertCancel>Cancel</CameraAlertCancel>
                  <CameraAlertAction><Link to="/">Continue</Link></CameraAlertAction>
                </CameraAlertFooter>
            </CameraAlertContent>
        </CameraAlert>
    </div>
  )
}

export default Question