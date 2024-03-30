import { useState, createContext } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Global Access
import LoginPage from "@/pages/LoginPage.jsx";
import SignUpPage from "@/pages/SignUpPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";
import MainLayout from "@/layout/MainLayout.jsx";

// Global Access && Authenticated
import JobPage, {jobLoader} from "./pages/JobPage.jsx";

// Applicant Side Import
import ApplicantDashboardPage from "./pages/Applicant/ApplicantDashboardPage.jsx";
import ApplicantProfilePage from "./pages/Applicant/ApplicantProfilePage.jsx";

// Applicant Assessment
import AssessmentDashboard from "./pages/Applicant/Assessment/AssessmentDashboard.jsx";

// Admin Side Import
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AddJobPage from "./pages/Admin/AddJobPage.jsx";
import EditJobPage from "./pages/Admin/EditJobPage.jsx";
export const HideAssessmentContext = createContext();

// Theming Import
import { ThemeProvider } from "./components/theme-provider.jsx";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  // Add New Job
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

  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    });
    return;
  }

  // Update Job
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

  const router = createBrowserRouter (
    createRoutesFromElements (
      <>
        {/* Authentication */}
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<SignUpPage/>}/>

        {/* Authentication Global Access */}
        {isAuthenticated ? (
          <>
            <Route path='/' element={<MainLayout isAssessmentOpen={isAssessmentOpen}/>}>
              <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
            </Route>
          </>
        ) : (
          ''
        )}

        {/* Applicant Authentication */}
        {isAuthenticated && !isAdmin ? (
          <>
            <Route path='/' element={<MainLayout isAssessmentOpen={isAssessmentOpen}/>}>
              <>
                <Route path='/dashboard' element={<ApplicantDashboardPage/>}/>
                <Route path='/profile' element={<ApplicantProfilePage/>}/>
              </>
            </Route>
          </>
        ) : (
          ''
        )}

        {/* Admin Authentication */}
        {isAuthenticated && isAdmin ? (
          <>
            <Route path='/' element={<MainLayout isAdmin={isAdmin}/>}>
              <>
                <Route path='/dashboard' element={<AdminDashboard/>}/>
                <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
                <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
              </>
            </Route>
          </>
        ) : (
          ''
        )}

        {/* Applicant Assessment */}
        {isAssessmentOpen && isAuthenticated ? (
          <>
            <Route path='/' element={<MainLayout isAssessmentOpen={isAssessmentOpen}/>}>
              <>
                <Route path='assessment-dashboard' element={<AssessmentDashboard/>}/>
              </>
            </Route>
          </>
          
        ) : (
          ''
        )}
        {/* 404 Error Page */}
        <Route path='*' element={<NotFoundPage/>}/>
      </>
    )
  )
  
  return (
    <>
      {/*This is for Light/Dark Mode */}
      <ThemeProvider> 
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  );
}

export default App
