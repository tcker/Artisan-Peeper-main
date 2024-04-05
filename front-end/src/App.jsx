import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../src/components/Login.jsx"; // Make sure this path is correct
import SignUpPage from "@/pages/SignUpPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";
import MainLayout from "@/layout/MainLayout.jsx";
import JobPage, { jobLoader } from "./pages/JobPage.jsx";
import ApplicantDashboardPage from "./pages/Applicant/ApplicantDashboardPage.jsx";
import ApplicantProfilePage from "./pages/Applicant/ApplicantProfilePage.jsx";
import AssessmentDashboard from "./pages/Applicant/Assessment/AssessmentDashboard.jsx";
import Assessmentchoices from "./pages/Applicant/Assessment/Assessmentchoices.jsx";
import Assessment from "./pages/Applicant/Assessment/Assessment.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AddJobPage from "./pages/Admin/AddJobPage.jsx";
import EditJobPage from "./pages/Admin/EditJobPage.jsx";
import ViewUser from './pages/Admin/ViewUser.jsx';
import { ThemeProvider } from "./components/theme-provider.jsx";
import { BrowserRouter } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkRNKXJVBa--Pp-PILg8-0T_OtdSpFMlo",
  authDomain: "artisan-peeper.firebaseapp.com",
  projectId: "artisan-peeper",
  storageBucket: "artisan-peeper.appspot.com",
  messagingSenderId: "122178031252",
  appId: "1:122178031252:web:a50cc6498077d213cbae81",
  measurementId: "G-CS97LJ6LLY"
};

const adminUid = "H8cUeg6QAxVV5xTpJMHePhdZIfI2"; // Admin UID

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); 

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Check if the user's UID matches the admin UID
        const isAdminUser = user.uid === adminUid;
        setIsAdmin(isAdminUser);
        setIsAuthenticated(true);
      } else {
        setIsAdmin(false);
        setIsAuthenticated(true);
      }
    });

    return () => unsubscribe();
  }, []);

  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job),
    });
    return;
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUpPage />} />

          {isAuthenticated && (
            <Route path="/" element={<MainLayout isAdmin={isAdmin} isAssessmentOpen={isAssessmentOpen} />}>
              <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
              <Route path="/dashboard" element={<ApplicantDashboardPage />} />
              <Route path="/profile" element={<ApplicantProfilePage />} />
              <Route path="/assessment-dashboard" element={<AssessmentDashboard />} />
              <Route path="/assessment-areas" element={<Assessmentchoices />} />
              <Route path="/assessment-start" element={<Assessment />} />
              <Route path="/assessment-start/:id" element={<Assessment />} />
              {isAdmin && (
                <>
                  <Route path="/adminDashboard" element={<AdminDashboard />} />
                  <Route path="/view-user" element={<ViewUser />} />
                  <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
                  <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
                </>
              )}
            </Route>
          )}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
