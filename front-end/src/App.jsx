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
import Assessmentchoices from "./pages/Applicant/Assessment/Assessmentchoices.jsx"
import Assessment from "./pages/Applicant/Assessment/Assessment.jsx"

// Admin Side Import
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AddJobPage from "./pages/Admin/AddJobPage.jsx";
import EditJobPage from "./pages/Admin/EditJobPage.jsx";
import ViewUser from './pages/Admin/ViewUser.jsx';
export const HideAssessmentContext = createContext();

// Theming Import
import { ThemeProvider } from "./components/theme-provider.jsx";

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const router = createBrowserRouter (
    createRoutesFromElements (
      <>
        {/* Authentication */}
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/register" element={<SignUpPage/>}/>

        {/* Authentication Global Access */}
        {isAuthenticated ? (
          <>
            <Route path='/' element={<MainLayout isAssessmentOpen={isAssessmentOpen}/>}>
              <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
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
                <Route path='/view-user' element={<ViewUser/>}/>
                <Route path='/add-job' element={<AddJobPage/>}/>
                <Route path="/edit-job/:id" element={<EditJobPage/>} loader={jobLoader}/>
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
                <Route path='/assessment-dashboard' element={<AssessmentDashboard/>}/>
                <Route path='/assessment-areas' element={<Assessmentchoices/>}/>
                <Route path='/assessment-start' element={<Assessment/>}/>
                <Route path='/assessment-start/:id' element={<Assessment/>}/>
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