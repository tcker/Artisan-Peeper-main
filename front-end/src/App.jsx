import { useState, createContext } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Global Access
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import MainLayout from "./layout/MainLayout.jsx";

// Applicant Side Import
import ApplicantDashboardPage from "./pages/Applicant/ApplicantDashboardPage.jsx";
import ApplicantProfilePage from "./pages/Applicant/ApplicantProfilePage.jsx";

// Applicant Assessment
import AssessmentDashboard from "./pages/Applicant/Assessment/AssessmentDashboard.jsx";

// Admin Side Import
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
export const HideAssessmentContext = createContext();

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)


  const router = createBrowserRouter (
    createRoutesFromElements (
      <>
        {/* Authentication */}
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<SignUpPage/>}/>

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
            <Route path='/' element={<MainLayout/>}/>
            <Route path='/dashboard' element={<AdminDashboard/>}/>
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
  
  return <RouterProvider router={router}/>;
}

export default App
