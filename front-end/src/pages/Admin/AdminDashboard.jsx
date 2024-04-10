import React, { useState, useEffect } from "react";
import Container from "@/components/Container.jsx";
import Total from "@/components/Total";
import TablePassing from "@/components/TablePassing.jsx";
import Top from "@/components/Top.jsx";
import JobListing from "@/components/JobListing.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../backend/config/firebase";
import Searchbar from "@/components/Searchbar";
import { ref, listAll } from 'firebase/storage';
import { storage } from '../../../../backend/config/firebase'; 

function AdminDashboard() {
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [usersWithResume, setUsersWithResume] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, 'users'));
        const userData = usersSnapshot.docs.map(doc => doc.data());

        // Total applicants count
        setTotalApplicants(userData.length);
        
        // Users who have submitted resumes
        const usersWithResumeData = await Promise.all(userData.map(async user => {
          const userFolderRef = ref(storage, `resumes/${user.uid}`);
          const userFolderSnapshot = await listAll(userFolderRef);
          if (userFolderSnapshot.items.length > 0) {
            return user;
          }
          return null;
        }));
        
        const filteredUsers = usersWithResumeData.filter(user => user !== null);
        setUsersWithResume(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Searchbar placeholderVal={"Search Applicant"} />
      <div className="flex justify-center items-center flex-col">
        <div className="flex flex-wrap justify-center items-center gap-6 my-3">
          <Total title="Total Applicants" total={totalApplicants} added="+" />
          <Total
            title="CV Passing Applicants"
            total={usersWithResume.length}
            added=""
          />
          <Total title="Passed Assessment" total="3" added="1+" />
          <Total title="Talents Onboard" total="1" added="+" />
        </div>
        <div className="flex justify-center gap-7 flex-wrap my-7 py-5">
          <div className="p-5 border-2 rounded-lg shadow-md flex flex-col justify-center items-center">
            <p className="text-xl font-bold mb-5 text-center">
              Passed Curriculum Vitae's
            </p>
            <TablePassing users={usersWithResume} />
          </div>
          <div className="p-5 border-2 rounded-lg shadow-md">
            <p className="text-xl trfont-bold mb-3">Top Candidates</p>
            <Top />
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="block pl-5 font-bold text-4xl">Applicants View</h1>
          <JobListing />
        </div>
      </div>
    </Container>
  );
}

export default AdminDashboard;
