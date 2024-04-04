import React, { useEffect, useState, useRef } from 'react';
import QuestionNav from '@/components/QuestionNav';
import Camera from '@/components/Camera.jsx';
import Question from '@/components/Question.jsx';
import { Button } from '@/components/ui/button';
import { Toaster, toast } from 'react-hot-toast'; 

const Assessment = () => {
  const [tabSwitchingEnabled, setTabSwitchingEnabled] = useState(true);
  const [terminated, setTerminated] = useState(false);
  const tabSwitchCountRef = useRef(0);

  useEffect(() => {
    let quizTimeout;

    function checkTabSwitch() {
      if (!tabSwitchingEnabled) return;
      tabSwitchCountRef.current++;

      const tabSwitchCount = tabSwitchCountRef.current;

      if (tabSwitchCount === 1) {
        toast.error('No switch tabbing that is dishonesty');
      } else if (tabSwitchCount === 2) {
        toast.error('One more and you will be terminated immediately');
      } else if (tabSwitchCount >= 3) {
        setTerminated(true);
      } else {
        toast.error('You switched tabs.');
      }

      quizTimeout = setTimeout(function () {
        setTerminated(true);
      }, 8000);
      document.getElementById('history').innerHTML = '';
      document.getElementById('history').classList.add('red');
      playTabSwitchAudio();
    }

    function playTabSwitchAudio() {
      const audio = new Audio('/DOTA Trashtalk.mp3');
      audio.play();
    }

    window.addEventListener('blur', checkTabSwitch);

    window.addEventListener('focus', function () {
      clearTimeout(quizTimeout);
      document.getElementById('history').classList.remove('red');
    });

    return () => {
      window.removeEventListener('blur', checkTabSwitch);
      clearTimeout(quizTimeout);
    };
  }, [tabSwitchingEnabled]);

  useEffect(() => {
    if (terminated) {
      toast.error('You have been terminated from the quiz.');
    }
  }, [terminated]);

  const toggleTabSwitching = () => {
    setTabSwitchingEnabled((prevEnabled) => !prevEnabled);
  };

  return (
    <>
      <Toaster /> 
      {terminated ? (
        <div>You have been terminated from the quiz.</div>
      ) : (
        <div className='ml-28 grid gap-x-5 md:mr-10 lg:mr-0 lg:grid-cols-[0.7fr_1fr] xl:grid-cols-[0.6fr_1fr]'>
          <div></div>
          <div className='sm:static lg:fixed lg:ml-5 xl:ml-20 mt-10 flex flex-col gap-4'>
            <Camera />
            <QuestionNav />
          </div>
          <div className='flex flex-col gap-10 bg-indigo-600 px-10 pt-5'>
            <span className='pb-2 text-2xl text-wrap border-b-[1px] text-white border-white w-full'>Teamwork</span>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Button className="mb-10" onClick={toggleTabSwitching}>
              {tabSwitchingEnabled ? 'Disable Tab Switching' : 'Enable Tab Switching'}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Assessment;