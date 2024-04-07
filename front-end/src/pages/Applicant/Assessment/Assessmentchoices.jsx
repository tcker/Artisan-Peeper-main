import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../../config/firebase'; // Import the Firebase config
import Container from '@/components/Container.jsx'
import AreaCard from '@/components/AreaCard.jsx'

const Assessmentchoices = () => {
  const [Assessment, setAssessment] = useState([]);
  

  useEffect(() => {
    const getAssessment = async () => {
      try {
        const data = await getDocs(collection(db, "Assessment"));
        const filteredData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAssessment(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getAssessment();
  }, [])

  return (
    <Container>
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="border-b-[2px] mb-5 border-black dark:border-slate-400 text-wrap ">
        Soft Skills Evaluation
      </h1>
      <div
        className="grid md:grid-cols-4 gap-4"
      >
        {Assessment.map((document, index) => (
          <AreaCard 
          key={index} title={document.id} score={document.Score} upto={document.Upto} page={document.id} />
        ))}
      </div>
    </div>
  </Container>
  );
};

export default Assessmentchoices;