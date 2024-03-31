import {Outlet} from 'react-router-dom'
import Navbar from '@/components/Navbar.jsx'
import ApplicantFooter from "@/components/ApplicantFooter"

function MainLayout({isAssessmentOpen, isAdmin}) {
  return (
    <>
      <Navbar isAssessmentOpen={isAssessmentOpen} isAdmin={isAdmin}/>
      <Outlet/>
      <ApplicantFooter/>
    </>
  )
}

export default MainLayout
