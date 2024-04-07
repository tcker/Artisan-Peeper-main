
import React, { useState, useEffect } from "react";
import Container from "@/components/Container.jsx";
import Total from "@/components/Total";
import TablePassing from "@/components/TablePassing.jsx";
import Top from "@/components/Top.jsx";
import JobListing from "@/components/JobListing.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../backend/config/firebase"; // Assuming you have a file named firebase.js exporting your Firestore instance


function AdminDashboard() { 
  const [totalApplicants, setTotalApplicants] = useState(0);


  useEffect(() => {
    async function fetchTotalUsers() {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        setTotalApplicants(querySnapshot.size);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    }
    fetchTotalUsers();
  }, []);


  return (
    <Container>
      <div className="flex justify-center items-center flex-col py-2">
        <div className="flex justify-between mx-4 flex-wrap ">
          <h1 className="font-bold text-2xl mt-5">Welcome back, Admin.</h1>
        </div>
        <div className="flex flex-wrap gap-6 px-2 my-3">
          <Total title="Total Applicants" total={totalApplicants} added="+" />  
          <Total title="CV Passing Applicants" total={totalApplicants} added="+" />
          <Total title="Passed Assessment" total="56" added="+" />
          <Total title="Total Passing" total="23" added="+" />
        </div>
        <div className="flex justify-center gap-7 flex-wrap my-7 mx-5">
          <div className="p-5 border-2 rounded-lg shadow-md">
            <p className="text-xl font-bold mb-5">
              Applicants with CV Rating&apos;s
            </p>
            <TablePassing />
          </div>
          <div className="p-5 border-2 rounded-lg shadow-md">
            <p className="text-xl font-bold mb-3">Passed Assessments</p>
            <Top />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-3">
          <h1 className="block pl-5 mb-5 font-bold text-4xl">
            Applicants view
          </h1>
          <JobListing />
        </div>
      </div>
    </Container>
  );
}


export default AdminDashboard;


