import React, { useEffect, useState, useRef } from "react";
import { useParams } from 'react-router-dom';
import QuestionNav from "@/components/QuestionNav";
import Camera from "@/components/Camera.jsx";
import Question from "@/components/Question.jsx";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "react-hot-toast";
import Container from "@/components/Container.jsx";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../config/firebase'; // Import the Firebase config

const Assessment = () => {
  const [tabSwitchingEnabled, setTabSwitchingEnabled] = useState(false);
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

  const { id } = useParams();
  const [subcollectionData, setSubcollectionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id == 'Adaptability') {
        const docRef = await getDocs(collection(db, "Assessment", "Adaptability", "Questions"));
        const subDocRef = docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSubcollectionData(subDocRef)
        } else if (id == 'Communication') {
          const docRef = await getDocs(collection(db, "Assessment", "Communication", "Questions"));
          const subDocRef = docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSubcollectionData(subDocRef)
        } else if (id == 'Interpersonal') {
          const docRef = await getDocs(collection(db, "Assessment", "Interpersonal", "Questions"));
          const subDocRef = docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSubcollectionData(subDocRef)
        } else if (id == 'Leadership') {
          const docRef = await getDocs(collection(db, "Assessment", "Leadership", "Questions"));
          const subDocRef = docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSubcollectionData(subDocRef)
        } else if (id == 'Problem Solving') {
          const docRef = await getDocs(collection(db, "Assessment", "Problem Solving", "Questions"));
          const subDocRef = docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSubcollectionData(subDocRef)
        } else if (id == 'Teamwork') {
          const docRef = await getDocs(collection(db, "Assessment", "Teamwork", "Questions"));
          const subDocRef = docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSubcollectionData(subDocRef)
        } else if (id == 'Work Ethic') {
          const docRef = await getDocs(collection(db, "Assessment", "Work Ethic", "Questions"));
          const subDocRef = docRef.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setSubcollectionData(subDocRef)
        } 
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [id]); // Fetch data when document ID changes
  
  return (
    <>
      <Toaster />
      {terminated ? (
        <div>You have been terminated from the quiz.</div>
      ) : (
        <Container>
          <div className="grid gap-x-5 md:grid-cols-2 justify-center items-center min-h-screen pt-3 ">
            <div className="mx-auto w-[400px]">
              <div className="grid gap-4 justify-center items-center">
                <Camera />
              {/* {subcollectionData.map((document, index) => ( */}
                <QuestionNav no={document.Q} />
                {/* ))} */}
              </div>
            </div>
            <div className="flex flex-col gap-10 pt-5 overflow-hidden">
              <span className="pb-2 text-2xl text-wrap border-b-2 border-indigo-600 w-full">
                {id}
              </span>
              <div className="h-[calc(70vh+100px)] overflow-scroll grid gap-4">
              {subcollectionData.map((document, index) => (
                <Question 
                key={index} question={document.Q} answerA={document.QA} answerB={document.QB} answerC={document.QC} answerD={document.QD} no={document.Query}/>
              ))}
                <Button
                >
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
