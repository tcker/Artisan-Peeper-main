import {Outlet} from 'react-router-dom'
import Navbar from '@/components/Navbar.jsx'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import ApplicantFooter from "@/components/ApplicantFooter"

function MainLayout({isAssessmentOpen, isAdmin}) {
  return (
    <>
      <Navbar isAssessmentOpen={isAssessmentOpen} isAdmin={isAdmin}/>
      <Outlet/>
      <ToastContainer/>
      <ApplicantFooter isAssessmentOpen={isAssessmentOpen} isAdmin={isAdmin}/>
    </>
  )
}

export default MainLayout
