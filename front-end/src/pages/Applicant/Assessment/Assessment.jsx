import React, { useEffect, useState, useRef } from "react";
import QuestionNav from "@/components/QuestionNav";
import Camera from "@/components/Camera.jsx";
import Question from "@/components/Question.jsx";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "react-hot-toast";
import Container from "@/components/Container.jsx";

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
        toast.error("No switch tabbing that is dishonesty");
      } else if (tabSwitchCount === 2) {
        toast.error("One more and you will be terminated immediately");
      } else if (tabSwitchCount >= 3) {
        setTerminated(true);
      } else {
        toast.error("You switched tabs.");
      }

      quizTimeout = setTimeout(function () {
        setTerminated(true);
      }, 8000);
      document.getElementById("history").innerHTML = "";
      document.getElementById("history").classList.add("red");
      playTabSwitchAudio();
    }

    // NOT YET FUNCTIONAL -RAM
    function playTabSwitchAudio() {
      const audio = new Audio("/DOTA Trashtalk.mp3");
      audio.play();
    }
    // NOT YET FUNCTIONAL -RAM
    
    window.addEventListener('blur', checkTabSwitch);

    window.addEventListener("focus", function () {
      clearTimeout(quizTimeout);
      document.getElementById("history").classList.remove("red");
    });

    return () => {
      window.removeEventListener("blur", checkTabSwitch);
      clearTimeout(quizTimeout);
    };
  }, [tabSwitchingEnabled]);

  useEffect(() => {
    if (terminated) {
      toast.error("You have been terminated from the quiz.");
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
        <Container>
          <div className="grid gap-x-5 md:grid-cols-2 justify-center items-center min-h-screen pt-3">
            <div className="mx-auto w-[400px]">
              <div className="grid gap-4 justify-center items-center">
                <Camera />
                <QuestionNav />
              </div>
            </div>
            <div className="flex flex-col gap-10 pt-5 overflow-hidden">
              <span className="pb-2 text-2xl text-wrap border-b-[1px] w-full">
                Teamwork
              </span>
              <div className="h-[calc(70vh+100px)] overflow-scroll grid gap-4">
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <Button
                  className="mt-10 mb-10 w-[100%]"
                  onClick={toggleTabSwitching}
                >
                  {tabSwitchingEnabled
                    ? "Disable Tab Switching"
                    : "Enable Tab Switching"}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default Assessment;
